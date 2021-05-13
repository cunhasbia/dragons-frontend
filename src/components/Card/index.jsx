import React from 'react';
import { useHistory } from 'react-router';
import { MdEdit, MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';

import apiDragons from '../../services/apiDragons';
import largeNameFormatter from '../../utils/largeNameFormatter';
import dateFormatter from '../../utils/dateFormatter';

import './styles.scss';

export default function Card({ dragon, setShowModal, setDragon, setModalType, setIdDragon}) {
  const { id, name, type, createdAt } = dragon;
  const history = useHistory();

  const handleClickEdit = (id) => {
    setIdDragon(id);
    setShowModal(true);
    setModalType('edit');
  };

  const handleClickDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        apiDragons.delete(`/${id}`)
          .then(() => setDragon(dragon))
          .catch(error => console.log(error));

        Swal.fire(
          'Done!',
          'Your dragon has been deleted',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your dragon is still here :)',
          'error'
        )
      }
    });
  }

  const handleClickDragonDetails = (id) => {
    history.push(`/details/${id}`);
  };

  return (
    <div className="cardItem">
      <div className="cardHeader">
        <MdEdit onClick={() => handleClickEdit(id)} />
        <MdDelete onClick={() => handleClickDelete(id)} />
      </div>

      <div className="cardTitle">
        <h3>{largeNameFormatter(name)}</h3>
      </div>

      <p className="cardType">
        Type: {type}
      </p>

      <button type="button" className="buttonDetails" onClick={() => handleClickDragonDetails(id)}>
        + view details
      </button>

      <div className="cardFooter">
        <p>Created at {dateFormatter(createdAt)}</p>
      </div>
    </div>
  );
};