import React, { Component } from 'react';
import Table from './Table/Table';
import DetailRowView from './DetailRowView/DetailRowView';
import TableSearch from './TableSearch/TableSearch';
import TableAdd from './TableAdd/TableAdd';
import TableEdit from './TableEdit/TableEdit';
import _ from 'lodash';


class Order extends Component {


  state = {
    data: this.props.infoGroup.test,
    search: '',
    sort: 'asc',  // 'desc'
    sortField: 'id',
    row: null,
    currentPage: 0,
    edit: true,
    changeId: null,
    propsGroup: this.props
  }
  onSort = sortField => {
    const cloneData = this.state.data.concat();
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    const data = _.orderBy(cloneData, sortField, sort);
    this.setState({ data, sort, sortField })
  }

  finalEditTable = (id) => {
    const { changeId } = this.state
    const changePerson = this.state.data.map(item => {
      if (item.id === changeId.id) {
        return [
          item.firstName = id.name,
          item.lastName = id.lastName,
          item.data = id.data,
          item.group = id.group
        ]
      }
      return item
    })
    this.setState(changePerson)
    this.setState({ edit: true })
  }
  editRow = rowId => {
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
    console.log('items', this.props);
    let oldTable = this.state.data;
    oldTable.push({
      "id": Math.floor(Math.random() * 100),
      "firstName": row.name,
      "lastName": row.lastName,
      "data": row.data,
      "group": row.group
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
        item["group"].toLowerCase().includes(search.toLowerCase())
      );
    });
    if (!result.length) {
      result = this.state.data
    }
    return result
  }

  render() {

    const styles = {
      wrap : {
        width: "auto"
      }
    }

    const filteredData = this.getFilteredData();
    const displayData = _.chunk(filteredData, this.state.data.length)[this.state.currentPage]
    return (
      <div style={styles.wrap} className="container">
        {
          <React.Fragment>
            <>
              <div>id name: {this.state.propsGroup.infoGroup.nameGroup}</div>
              <TableSearch onSearch={this.searchHandler} />
              {this.state.edit ? <TableAdd addTable={this.addTable} /> : null}
              {!this.state.edit ? <TableEdit changeId={this.state.changeId} finalEditTable={this.finalEditTable} cancel={this.cancel} /> : null}
              <Table
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
                deleteRow={this.deleteRow}
                editRow={this.editRow}
              />
            </>
          </React.Fragment>
        }
        {
          this.state.row ? <DetailRowView person={this.state.row} /> : null
        }
      </div>
    );
  }
}

export default Order;
