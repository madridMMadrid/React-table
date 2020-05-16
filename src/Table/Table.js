import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    console.log('Закрыть', show)
  };
  const handleShow = () => {
    setShow(true);
    console.log('Открыть', show)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Редактировать
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Инфа про чела</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Созранить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default props => (
    <table className="table" style={{ cursor: "pointer" }}>
      <thead>
        <tr>
          <th onClick={props.onSort.bind(null, "id")}>
            ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "firstName")}>
            First Name{" "}
            {props.sortField === "firstName" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "lastName")}>
            Last Name{" "}
            {props.sortField === "lastName" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "email")}>
            E-mail{" "}
            {props.sortField === "email" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "phone")}>
            Phone{" "}
            {props.sortField === "phone" ? <small>{props.sort}</small> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => (
          <tr
            key={item.id + item.phone}
          >
            <td 
            onClick={props.onRowSelect.bind(null, item)}
            >{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td><button type="button" className="btn btn-danger" onClick={props.deleteRow.bind(null, item.id)}>x</button></td>
            <td><Example /></td>
          </tr>

        ))}
      </tbody>
    </table>
);