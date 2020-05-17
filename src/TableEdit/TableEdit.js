import React, { useState } from 'react'

export default props => {
  const [name, setValueName] = useState(props.changeId.firstName)
  const [lastName, setValueLastName] = useState(props.changeId.lastName)
  const [data, setData] = useState(props.changeId.data)
  const [group, setGrpup] = useState(props.changeId.group)
  const valueChangeHandlerName = event => setValueName(event.target.value)
  const valueChangeHandlerLastName = event => setValueLastName(event.target.value)
  const valueChangeData = event => setData(event.target.value)
  const valueChangeGroup = event => setGrpup(event.target.value)

  const handleSubmit = event => {
    event.preventDefault();
  }


  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit}>
        <button 
          type="submit" 
          className="btn btn-success mb-2 mr-2"
          onClick={props.finalEditTable.bind(null, {name, lastName, data, group})}  
        >Ок</button>
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
          placeholder="Username" 
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
        <button 
          type="submit" 
          className="btn btn-success mb-2 mr-2"
          onClick={props.cancel.bind(null)}  
        >Отмена</button>
      </form>
    </>
  )
}