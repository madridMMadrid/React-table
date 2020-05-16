import React, { Component } from 'react';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView';
import TableSearch from './TableSearch/TableSearch';
import TableAdd from './TableAdd/TableAdd';
import _ from 'lodash';


class App extends Component {

  
  state = {
    isModeSelected: false,
    isLoading: false,
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
  }
  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField })
  }

  modeSelectHandler = url => {
    // console.log(url)
    this.setState({
      isModeSelected: true,
      isLoading: true,
    })
    this.fetchData(url)
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
      "phone": "(909)541-2985",
      "address": {
        "streetAddress": "7366 Ante Ln",
        "city": "Saint Pauls",
        "state": "NC",
        "zip": "93276"
      },
      "description": "Описание"
    });

    this.setState(oldTable);
  }
  deleteRow = row => (
    this.setState({data: this.state.data.filter(item => item.id !== row)})
  )

  pageChangeHandler = ({ selected }) => (
    this.setState({ currentPage: selected })
  )

  searchHandler = search => {
    this.setState({ search, currentPage: 0 })
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
              <TableAdd addTable={this.addTable} />
              <Table
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
                deleteRow={this.deleteRow}
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
