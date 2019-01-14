import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
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
    e.preventDefault();

    var hash = {};
    hash['title'] = this.state.title;
    hash['date'] = this.state.date.toString();

    var newList = this.state.list.slice();
    newList.push(hash);
    this.setState({list:newList})
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
    let form;
    let todos;
    let element;
    let listItems;

    listItems = this.state.list.map((todo, i) => <li key={'todo-' + i}>{todo['title']} is due {this.formatDate(todo['date'])}</li>)
    todos = <ul>{listItems}</ul>

    form = <form>
            <Label/>
            <Information
              title={this.state.title}
              handleTitleChange={this.handleTitleChange}
              dueDate={this.state.date}
              handleDateChange={this.handleDateChange}
            /><br/>
            <input type="submit" value="Create" onClick={this.handleClick}/>
          </form>
    element = <div>{todos}{form}</div>
    return (<div>{element}</div>);
  }
}

var Label = function() {
  return <label>Add a new to do:</label>
}

var Information = function(props) {
  return <div>
      <Title title={props.title} handleTitleChange={props.handleTitleChange}/>
      <DueDate dueDate={props.dueDate} handleDateChange={props.handleDateChange}/>
    </div>
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

ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
