import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import FormInput from '../../components/FormInput';
import Loading from '../../components/Loading';
import ErrorAlert from '../../components/ErrorAlert';
import Footer from '../../components/Footer';

import { userLogin, errorToFalse } from '../../store/login/action';

import dragonLogo from '../../assets/dragon-logo.png';
import './styles.scss';

export default function Login() {
  const userLogged = localStorage.getItem('userLogged');
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const { user, success, isFetching, error, message } = useSelector(state => state.loginReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogged) {
      history.push('/home');
    }
  }, [userLogged, history]);

  useEffect(() => {
    if (success) {
      localStorage.setItem('userLogged', JSON.stringify(user));
      history.push('/home');
    } else if (error) {
      setLogin({ email: '', password: '' });
      console.log(`ERROR: ${message}`);
    }
  }, [success, error, user, history, message]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogin(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const { email, password } = login;

    dispatch(errorToFalse());
    dispatch(userLogin(email, password));
  };

  if (isFetching) {
    return <Loading />
  }

  return (
    document.title = 'Dragons | Login',

    <div className="pageLogin animateAppear">
      <div className="loginBox">
        <div className="dragonIcon">
          <img src={dragonLogo} alt="dragon logo" />
        </div>
        <h1 className="title">Welcome to Dragons</h1>
        <p className="subtitle">Please, sign in to your account</p>
        
        { error ? (<ErrorAlert message={message} />) : '' }

        <form className="formGroup">
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={login.email}
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={login.password}
            handleChange={handleChange}
            required
          />
          <button className="buttonLogin" type="button" onClick={handleLogin}>Log in</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};