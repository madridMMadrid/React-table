import React, { Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import ModeSelector from './ModeSelector/ModeSelector';


class App extends Component {
  state = {
    isModeSelected: false,
    isLoading: false,
    data: [],
    currentPage: 0,
    token: 'QpwL5tke4Pnpja7X4',
    error: false
  }
  async fetchData(url) {
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      isLoading: false,
      data: data.data
    })
  }

  async fetchLogit(login, url, email, pass) {
    this.postData(login, {
    // "email": "eve.holt@reqres.in",
    // "password": "pistol"
      "email": email,
      "password": pass
    }).then((data) => {
      if (data.token == this.state.token) {
        this.fetchData(url)
        console.log('data', data);
      } else {
        this.setState({
          error: true,
          isModeSelected: false,
          isLoading: false,
        })
      }
    });
  }

  async postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return await response.json();
  }




  modeSelectHandler = (url, email, pass) => {
    const login = `https://reqres.in/api/login`
    this.setState({
      isModeSelected: true,
      isLoading: true,
    })
    this.fetchLogit(login, url, email, pass)
  }
  render() {
    if (!this.state.isModeSelected) {
      return (
        <div className="container">
          <ModeSelector 
            onSelect={this.modeSelectHandler} 
            error={this.state.error}
          />
        </div>
      )
    }

    return (
      <div className="container">
        {
          this.state.isLoading
            ? <Loader />
            : <React.Fragment>
              <Table
                data={this.state.data}
              />
            </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
