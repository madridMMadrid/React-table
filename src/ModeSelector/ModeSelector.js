import React, { Component } from "react";
import "./App.css";

const smallUrl = `https://reqres.in/api/users?page=2`;
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  class Form extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: null,
        password: null,
        formErrors: {
          email: "",
          password: ""
        }
      };
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
      } else {
        console.error("FORM INVALID");
      }
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "Не валидный адрес";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "минимум 6 символов" : "";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state, 'test', this.props));
    };
  
    render() {
      const { formErrors } = this.state;
      return (
        <div className="wrapper">
          <div className="form-wrapper">
            { this.props.error ? <h1>Не такого пользователя</h1> : <h1>Вход в систему</h1>}
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  className={formErrors.password.length > 0 ? "error" : null}
                  placeholder="Password"
                  type="password"
                  name="password"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
              <div className="createAccount">
                <button 
                  disabled={formErrors.email != "" || formErrors.password != ""} 
                  onClick={()=> this.props.onSelect(smallUrl, this.state.email, this.state.password)} 
                  className="btn btn-success">Войти</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
  
  export default Form;