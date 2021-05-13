import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { IoIosArrowRoundBack } from 'react-icons/io';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import apiDragons from '../../services/apiDragons';

import './styles.scss';

export default function Details({ match }) {
  const [dragonDetails, setDragonDetails] = useState({});
  const userLogged = localStorage.getItem('userLogged');
  const id = match.params.id;
  const history = useHistory();

  useEffect(() => {
    (!userLogged)
      ? history.push('/')
      : apiDragons.get(`/${id}`)
        .then(response => setDragonDetails(response.data))
        .catch(error => console.log(error));
  }, [userLogged, history, id]);

  const handleClick = () => {
    window.history.back();
  }

  return (
    document.title = `Dragons | ${dragonDetails.name}`,

    <div className="pageDetails">
      <Header />
      <div className="dragonDetailsContainer">
        <div className="detailsHeader">
          <span className="arrowBack" onClick={handleClick} >
            <IoIosArrowRoundBack size={30} /> back
          </span>
          <span className="dragonId">{dragonDetails.id}</span>
        </div>

        <div className="detailsMain">
          <div className="dragonName">
            <h2>{dragonDetails.name}</h2>
          </div>

          <div className="dragonType">
            <p>
              <span>Type:</span> {dragonDetails.type}
            </p>

            <div className="dragonHistories">
              <p>
                <span>Histories where appears:</span> {dragonDetails.histories}
              </p>
            </div>
          </div>
        </div>

        <div className="detailsFooter">
          <span>Created at {dragonDetails.createdAt}</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};