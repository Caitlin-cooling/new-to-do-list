import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import style from "react-datepicker/dist/react-datepicker.css";

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

  handleClick(e) {
    let hash = {};
    let date = "";
    let newList = [];
    e.preventDefault();

    date = this.state.date.toString();
    hash['title'] = this.state.title;
    hash['date'] = this.formatDate(date);

    newList = this.state.list.slice();
    newList.push(hash);
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

  formatDate(date) {
    var dueDate = new Date(this.state.date);
    var dd = dueDate.getDate();
    var mm = dueDate.getMonth() + 1;

    var yyyy = dueDate.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy;
  }

  render() {
    let element;

    element = <Router>
      <div>
        <PageTitle/>
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
      </div>
    </Router>
    return (<div style={appStyle}>{element}</div>);
  }
}

const appStyle = {
  textAlign: 'center',
  fontFamily: 'Helvetica'
}

const buttonStyle = {
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'Helvetica'
}

const titleStyle = {
  fontFamily: 'Permanent Marker',
  textAlign: 'center',
  fontSize: '4em'
}

const labelStyle = {
  fontFamily: 'Helvetica'
}

const formStyle = {
  height: 200,
  width: 200,
  borderStyle: 'solid',
  borderColor: 'black',
  borderWidth: 1,
  padding: 10
}

  const divStyle = {
  textAlign: 'center',
  display: 'inline-block'
}

const listItemStyle = {
  listStyle: 'none'
}

var HomePage = function(props) {
  return <div>
    <NewButton/>
    <ToDoList list={props.list}/>
  </div>
}

var CreateForm = function(props) {
  return <div style={ divStyle }>
          <form style={ formStyle }>
            <Label/>
            <div>
              <Title title={props.title} handleTitleChange={props.handleTitleChange}/>
              <DueDate dueDate={props.dueDate} handleDateChange={props.handleDateChange}/>
              <br/>
              <SubmitButton handleClick={props.handleClick}/>
            </div>
        </form>
      </div>
    }

var NewButton = function() {
  return <button>
    <Link style={ buttonStyle } to="/new">Add new item</Link>
  </button>
}

var PageTitle = function(props) {
  return <h1 style={titleStyle}>To Do List</h1>
}

var ToDoList = function(props) {
  let listItems;

  listItems = props.list.map((todo, i) => <li style={ listItemStyle } key={'todo-' + i} >{todo['title']} is due {todo['date']}</li>)
  return <ul>{listItems}</ul>
}

var Label = function() {
  return <label style={ labelStyle }>Add a new to do:</label>
}

var Title = function(props) {
  return <p>
    <input
      type="text"
      placeholder="Title"
      value={props.title}
      onChange={props.handleTitleChange}/>
    </p>
}

var DueDate = function (props) {
  return <div>
    <DatePicker
      todayButton={"Today"}
      placeholderText="Click to select a date"
      dateFormat="dd/MM/yyyy"
      selected={props.dueDate}
      onChange={props.handleDateChange}
    />
  </div>
}

var SubmitButton = function(props) {
  return <button onClick={props.handleClick}><Link to="/" style={ buttonStyle }>Submit</Link></button>
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
