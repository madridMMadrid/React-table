import React, { Component, useState } from 'react';
import Order from './OrderComp'
import AddGroup from './AddGroup/AddGroup'


class App extends Component {
  state = {
    group: [
      {
        id: 1, nameGroup: 'Group_1', test: [{
          "id": 531,
          "firstName": "Андрей",
          "lastName": "Баранов",
          "data": "11.12.87",
          "group": "J-1"
        },
        {
          "id": 7,
          "firstName": "Гретта",
          "lastName": "Гарлкина",
          "data": "12.12.87",
          "group": "K-1"
        },
        {
          "id": 876,
          "firstName": "Джеймс",
          "lastName": "Гандольфини",
          "data": "09.12.87",
          "group": "F-1"
        }]
      },
      {
        id: 2, nameGroup: 'Group_2', test: [{
          "id": 531,
          "firstName": "Андрей",
          "lastName": "Баранов",
          "data": "11.12.87",
          "group": "J-1"
        }]
      }
    ]
  }

  addGroup = row => {
    let newGroup = this.state.group;
    newGroup.push({
      id: Math.floor(Math.random() * 100), nameGroup: row, test: []
    });
    this.setState(newGroup);
  }

  render() {

    const styles = {
      wrap: {
        padding: '2px 3px',
        marginBottom: '2px',
        width: '560px',
        display: 'flex'
      },
      flex: {
        display: 'flex'
      }
    }
    return (
      <>
        <AddGroup addGroup={this.addGroup} />
        <div style={styles.flex}>
          <div style={styles.wrap}>
            {this.state.group.map(item => {
              return (<Order key={item.id + Math.floor(Math.random() * 100)} infoGroup={item} />)
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
