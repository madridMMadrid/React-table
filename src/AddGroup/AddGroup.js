import React, {useState} from 'react'

export default props => {
    const [value, setValue] = useState('')
    const valueChangeHandler = event => {
        setValue(event.target.value)
      }
      const styles = {
        input: {
          width: '560px',
        }
      }

    return (
      <>
        <div style={styles.input} className="input-group mb-3 mt-3">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-secondary"
              onClick={props.addGroup.bind(null, value)}
            >
              Создать группу
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            onChange={valueChangeHandler}
            value={value}
          />
        </div>
      </>
    );
}