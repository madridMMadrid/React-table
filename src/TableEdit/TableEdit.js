import React, { useState } from 'react'

export default props => {
  const [name, setValueName] = useState('')
  const [lastName, setValueLastName] = useState('')
  const valueChangeHandlerName = event => {
    setValueName(event.target.value)
  }
  const valueChangeHandlerLastName = event => {
    setValueLastName(event.target.value)
  }
  const handleSubmit = event => {
    console.log('event', name, lastName)
    setValueName('')
    setValueLastName('')
    event.preventDefault();
  }


  return (
    <>
      <form className="form-inline" onSubmit={handleSubmit}>
        <button 
          type="submit" 
          className="btn btn-success mb-2 mr-2"
          onClick={props.finalEditTable.bind(null, {name, lastName})}  
        >Change row</button>
        <label className="sr-only" for="inlineFormInputName2">Name</label>
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          id="inlineFormInputName2" 
          placeholder="Jane Doe" 
          onChange={valueChangeHandlerName}
          value={name}
        />
        <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
        <input 
          type="text" 
          className="form-control mb-2 mr-sm-2" 
          id="inlineFormInputGroupUsername2" 
          placeholder="Username" 
          onChange={valueChangeHandlerLastName}
          value={lastName}
        />
      </form>
    </>
  )
}