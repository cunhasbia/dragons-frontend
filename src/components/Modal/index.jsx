import React, { useState, useEffect } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';
import { MdModeEdit } from 'react-icons/md';

import apiDragons from '../../services/apiDragons';

import './styles.scss';

export default function Modal({ setShowModal, modalType, idDragon }) {
  const [changed, setChanged] = useState(false);
  const [dragon, setDragon] = useState({
    name: '',
    type: '',
    histories: '',
    createdAt: new Date(),
  });

  useEffect(() => {
    if (modalType === 'edit')
      apiDragons.get(`/${idDragon}`)
        .then(response => setDragon(response.data))
        .catch(error => console.log(error));
  }, [modalType, idDragon]);


  const handleClose = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDragon(prevState => ({
      ...prevState,
      [name]: value,
    }));

    (!dragon.name.length || !dragon.type.length || !dragon.histories.length)
    ? setChanged(false)
    : setChanged(true)
  };

  const handleSubmit = () => {   
    if (modalType === 'add') {
      apiDragons.post('/', dragon)
        .then(() => setShowModal(false))
        .catch(error => console.log(error));
    } 

    if (modalType === 'edit') {
      apiDragons.put(`/${dragon.id}`, dragon)
        .then(() => setShowModal(false))
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="modalBg">
      <div className="modalContainer">
        <div className="modalHeader">
          <h2>
            {modalType === 'add' 
            ? <span><AiOutlinePlus size={20} /> New dragon</span>
            : <span><MdModeEdit size={20} /> Edit dragon</span>}
          </h2>

          <AiOutlineClose size={28} className="modalCloseIcon" onClick={handleClose} />
        </div>

        <div className="modalInputGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Example: Deathwing"
            value={dragon.name}
            onChange={handleChange}
            className='modalInput'
            autoFocus
          />

          <label htmlFor="type">Type</label>
          <input
            type="text"
            name="type"
            placeholder="Example: Black"
            value={dragon.type}
            onChange={handleChange}
            className='modalInput'
            maxLength="25"
          />

          <label htmlFor="histories">Histories</label>
          <textarea
            name="histories"
            placeholder="Example: Character of World of Warcraft"
            value={dragon.histories}
            onChange={handleChange}
            className='modalInput'
            maxLength="300"
          />
        </div>

        <button className="modalButton" onClick={handleSubmit} disabled={!changed}>
          {modalType === 'add' ? 'add dragon' : 'edit dragon'}
        </button>

      </div>
    </div>
  )
};