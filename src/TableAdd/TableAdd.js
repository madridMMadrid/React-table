import React, { useState } from 'react'

export default props => {
  const [name, setValueName] = useState('')
  const [lastName, setValueLastName] = useState('')
  const [data, setData] = useState('')
  const [group, setGrpup] = useState('')
  const valueChangeHandlerName = event => setValueName(event.target.value)
  const valueChangeHandlerLastName = event => setValueLastName(event.target.value)
  const valueChangeData = event => setData(event.target.value)
  const valueChangeGroup = event => setGrpup(event.target.value)
  const handleSubmit = event => {
    setValueName('')
    setValueLastName('')
    setData('')
    setGrpup('')
    event.preventDefault();
  }


  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit}>
        <button 
          disabled={name.length < 3}
          type="submit" 
          className="btn btn-primary mb-2 mr-2"
          onClick={props.addTable.bind(null, {name, lastName, data, group})}  
        >Создать</button>
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          placeholder="Имя" 
          onChange={valueChangeHandlerName}
          value={name}
        />
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          placeholder="Фамилия" 
          onChange={valueChangeHandlerLastName}
          value={lastName}
        />
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          placeholder="Дата" 
          onChange={valueChangeData}
          value={data}
        />
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          placeholder="Группа" 
          onChange={valueChangeGroup}
          value={group}
        />
      </form>
    </>
  )
}