import React, { Component } from 'react';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView';
import TableSearch from './TableSearch/TableSearch';
import TableAdd from './TableAdd/TableAdd';
import TableEdit from './TableEdit/TableEdit';
import _ from 'lodash';


class App extends Component {


  state = {
    data: [
      {
        "id": 531,
        "firstName": "Андрей",
        "lastName": "Баранов",
        "email": "andrey@bk.ru",
        "phone": "(909)541-2985",
        "address": {
          "streetAddress": "7366 Ante Ln",
          "city": "Saint Pauls",
          "state": "NC",
          "zip": "93276"
        },
        "description": "Описание"
      },
      {
        "id": 7,
        "firstName": "Гретта",
        "lastName": "Гарлкина",
        "email": "diana@list.ru",
        "phone": "(373)069-8474",
        "address": {
          "streetAddress": "3533 Pulvinar Dr",
          "city": "Allentown",
          "state": "KY",
          "zip": "19194"
        },
        "description": "Описание 1"
      },
      {
        "id": 876,
        "firstName": "Джеймс",
        "lastName": "Гандольфини",
        "email": "jemes@list.ru",
        "phone": "(455)380-5765",
        "address": {
          "streetAddress": "6557 Pretium Ct",
          "city": "Berlin",
          "state": "LA",
          "zip": "94511"
        },
        "description": "Описание 2"
      },
    ],
    search: '',
    sort: 'asc',  // 'desc'
    sortField: 'id',
    row: null,
    currentPage: 0,
    edit: true,
    changeId: 0
  }
  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField })
  }

  finalEditTable = (id) => {
    console.log('что пришло', id)
    const { changeId } = this.state
    const changePerson = this.state.data.map(item => {
      if (item.id === changeId) {
        return [
          item.firstName = id.name,
          item.lastName = id.lastName
        ]
      }
      return item
    })
    this.setState(changePerson)
    this.setState({ edit: true })
  }
  editRow = rowId => {
    console.log('rowId', rowId)
    this.setState({ edit: false })
    this.setState({ changeId: rowId })
  }
  cancel = () => {
    this.setState({ edit: true })
  }




  onRowSelect = row => (
    this.setState({ row })
  )
  addTable = row => {
    let oldTable = this.state.data;
    console.log('row', row)
    oldTable.push({
      "id": 11,
      "firstName": row.name,
      "lastName": row.lastName,
      "email": "andrey@bk.ru",
      "description": "Описание"
    });

    this.setState(oldTable);
  }

  deleteRow = row => (
    this.setState({ data: this.state.data.filter(item => item.id !== row) })
  )

  searchHandler = search => {
    this.setState({ search })
  }

  getFilteredData() {
    const { data, search } = this.state

    if (!search) {
      return data
    }
    var result = data.filter(item => {
      return (
        item["firstName"].toLowerCase().includes(search.toLowerCase()) ||
        item["lastName"].toLowerCase().includes(search.toLowerCase()) ||
        item["email"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.state.data
    }
    return result
  }

  render() {

    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, this.state.data.length)[this.state.currentPage]
    return (
      <div className="container">
        {
          <React.Fragment>
            <TableSearch onSearch={this.searchHandler} />
            {this.state.edit ? <TableAdd addTable={this.addTable} /> : null}
            {!this.state.edit ? <TableEdit finalEditTable={this.finalEditTable} cancel={this.cancel}/> : null}
            <Table
              data={displayData}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              onRowSelect={this.onRowSelect}
              deleteRow={this.deleteRow}
              editRow={this.editRow}
            />
          </React.Fragment>
        }
        {
          this.state.row ? <DetailRowView person={this.state.row} /> : null
        }
      </div>
    );
  }
}

export default App;
