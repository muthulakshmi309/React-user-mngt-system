import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, TableProps } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      error: null,
      isLoaded: false
    };

  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/pkisp")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            usersList: result.users
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  render() {  
    const usersList = this.state.usersList;
    let key = {};  
    return (
      <div className="App">
        <header className="App-header">         
          <h1 className="App-title">User Management System</h1>
        </header>        

        
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of birth</th>
            <th>Age</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {
           usersList.map((item, index) => {
           return (<tr> 
            <td>{ item.first_name + " " + item.last_name } </td>
            <td> {new Intl.DateTimeFormat('en-US', { 
                year: 'numeric', 
                month: 'numeric', 
                day: '2-digit' 
        }).format(item.dob)}</td>
            <td>{ item.first_name } </td>
            <td>{ item.email } </td>
            <td>{ item.phone } </td>
            <td>{ item.active } </td>
            <td>{  } </td>
          </tr>);
         })
        }
        </tbody>
      </Table>
      </div>
    );
  }
}

export default App;
