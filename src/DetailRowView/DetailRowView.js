import React from 'react';

export default ({person}) => (
    <div>
    <p>Имя Фамилия: <b>{person.firstName + ' ' + person.lastName}</b></p>
    <p>Дата: <b>{person.data}</b></p>
    <p>Группа: <b>{person.group}</b></p>

  </div>
)