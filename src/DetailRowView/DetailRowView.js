import React from 'react';

export default ({person}) => (
    <div>
    <p>Выбран пользователь <b>{person.firstName + ' ' + person.lastName}</b></p>

    <p>Адрес проживания: <b>{person.address.streetAddress}</b></p>
    <p>Индекс: <b>{person.address.zip}</b></p>

  </div>
)