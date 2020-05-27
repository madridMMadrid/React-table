import React from 'react';

export default props => (
  <table className="table" style={{ cursor: "pointer", marginTop: "100px" }}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Icon</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr
          key={item.id + Math.floor(Math.random() * 100)}
        >
          <td>{item.id}</td>
          <td><img  src={item.avatar} alt="альтернативный текст"/></td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
          <td>{item.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);