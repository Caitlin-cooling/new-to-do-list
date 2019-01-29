import React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./homepage.js";
import DatePicker from "react-datepicker";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import style from "react-datepicker/dist/react-datepicker.css";
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      title: "",
      date: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  sort(array) {
    array.sort(function(obj1, obj2){
      return obj1.date - obj2.date;
     });
  }

  handleClick(e) {
    let hash = {};
    let date = "";
    let newList = [];
    e.preventDefault();

    date = this.state.date.toString();
    hash['title'] = this.state.title;
    hash['date'] = new Date(this.state.date);

    newList = this.state.list.slice();
    newList.push(hash);
    this.sort(newList);

    this.setState({list:newList});
    this.setState({title:""})
    this.setState({date:new Date()})
  }

  handleTitleChange() {
    this.setState({title:event.target.value})
  }

  handleDateChange(date) {
    this.setState({date: date})
  }

  render() {
    let element;

    element = <Router>
      <div className='center'>
        <NavBar/>
        <Route exact path= "/" render={(props) => <HomePage {...props} list={this.state.list}/>}/>
        <Route exact path= "/new"
          render={(props) =>
          <CreateForm {...props}
            title={this.state.title}
            handleTitleChange={this.handleTitleChange}
            dueDate={this.state.date}
            handleDateChange={this.handleDateChange}
            handleClick={this.handleClick}
            />}
          />
          <Shapes/>
      </div>
    </Router>
    return (<div>{element}</div>);
  }
}

var CreateForm = function(props) {
  return <div className='center'>
          <form id='create-form'>
            <FormTitle/>
            <div>
              <Title title={props.title} handleTitleChange={props.handleTitleChange}/>
              <DueDate dueDate={props.dueDate} handleDateChange={props.handleDateChange}/>
              <br/>
              <SubmitButton handleClick={props.handleClick}/>
            </div>
        </form>
      </div>
    }

var NavBar = function() {
  return <Navbar>
    <Nav>
      <Navbar.Header>
        <Navbar.Brand>
        <Link className="home-button" to="/">
          Do it
        </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <NavItem>
        <Link className="new-button" to="/new">
          Create new
        </Link>
      </NavItem>
    </Nav>
  </Navbar>
}

var Shapes = function() {
  return <div className="egg">
    <div className="tear">
    </div>
    <div className="top-circle">
    </div>
    <div className="oval">
      <div className="circle">
      </div>
    </div>
  </div>
}

var FormTitle = function() {
  return <h1>Add a new to do</h1>
}

var Title = function(props) {
  return <p>
    <input className="text-field"
      type="text"
      placeholder="Title"
      value={props.title}
      onChange={props.handleTitleChange}/>
    </p>
}

var DueDate = function (props) {
  return <div>
    <DatePicker
      className="text-field"
      todayButton={"Today"}
      placeholderText="Click to select a date"
      dateFormat="dd/MM/yyyy"
      selected={props.dueDate}
      onChange={props.handleDateChange}
    />
  </div>
}

var SubmitButton = function(props) {
  return <Button onClick={props.handleClick}>
    <Link className='link' to="/">Submit</Link>
  </Button>
}

ReactDOM.render(
    <App/>,
    document.getElementById('index')
  );
