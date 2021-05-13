import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { BsPlusSquare } from 'react-icons/bs';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import Loading from '../../components/Loading';
import ErrorAlert from '../../components/ErrorAlert';
import Footer from '../../components/Footer';

import apiDragons from '../../services/apiDragons';
import sortByName from '../../utils/sortByName';

import dragonImage from '../../assets/dragon-lg-image.png';
import './styles.scss';

export default function Home() {
  const [dragons, setDragons] = useState([]);
  const [dragon, setDragon] = useState({});
  const [idDragon, setIdDragon] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const userLogged = localStorage.getItem('userLogged');
  const history = useHistory();

  useEffect(() => {
    if (!userLogged) {
      history.push('/');
    }

    setIsFetching(true);
    
    apiDragons.get('/')
      .then(response => {
        setDragons(sortByName(response.data));
        setIsFetching(false);
      })
      .catch(error => console.log(error));
  }, [dragon, userLogged, showModal, history]);

  if (isFetching && !dragons.length) {
    return <Loading />;
  }

  const handleClickAddDragon = () => {
    setShowModal(true);
    setModalType('add');
  };

  return (
    document.title = 'Dragons | Home',

    <div className="pageHome animateAppear">
      <Header />
      <div className="dragonImage animateDown">
        <img src={dragonImage} alt="dragon" />
      </div>
      <div className="cardsContainer animateAppear">
        <div className="divAddDragon">
          <button type="button" className="buttonAddDragon" onClick={handleClickAddDragon}>
            <BsPlusSquare />
            <span>New dragon</span>
          </button>
        </div>
        {(!dragons.length)
          ? <ErrorAlert message="No dragons available" />
          : dragons.map((dragon) => (
            <Card
              key={dragon.id}
              dragon={dragon}
              setDragon={setDragon}
              setIdDragon={setIdDragon}
              setShowModal={setShowModal}
              setModalType={setModalType}
            />
          ))
        }
      </div>

      {showModal
      ? (<Modal
          setShowModal={setShowModal}
          modalType={modalType}
          idDragon={idDragon}
        />)
      : ''}

      <Footer />
    </div>
  );
};