import React, { useState } from 'react';


export default props => (
  <>
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
          <th onClick={props.onSort.bind(null, "data")}>
            data{" "}
            {props.sortField === "email" ? <small>{props.sort}</small> : null}
          </th>
          <th onClick={props.onSort.bind(null, "group")}>
            gropu{" "}
            {props.sortField === "phone" ? <small>{props.sort}</small> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data ?
        props.data.map(item => (
          <tr
            key={item.id + item.data} 
            >
            <td
            onClick={props.onRowSelect.bind(null, item)}
            >{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.data}</td>
            <td>{item.group}</td>
            <td><button type="button" className="btn btn-danger" onClick={props.deleteRow.bind(null, item.id)}>x</button></td>
            <td><button type="button" className="btn btn-primary" onClick={props.editRow.bind(null, item)}>Ред.</button></td>
          </tr>

        )) : null}
      </tbody>
    </table>
  </>
);