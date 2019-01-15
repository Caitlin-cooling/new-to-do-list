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

  createForm() {
    return (<form>
            <Label/>
            <div>
                <Title title={this.state.title} handleTitleChange={this.handleTitleChange}/>
                <DueDate dueDate={this.state.date} handleDateChange={this.handleDateChange}/>
                <SubmitButton handleClick={this.handleClick}/>
              </div>
          </form>)
  }

  render() {
    let element;

    element = <div>{<ToDoList list={this.state.list}/>}{this.createForm()}</div>
    return (<div>{element}</div>);
  }
}

var ToDoList = function(props) {
  let listItems;

  listItems = props.list.map((todo, i) => <li key={'todo-' + i}>{todo['title']} is due {todo['date']}</li>)
  return <ul>{listItems}</ul>
}

var Label = function() {
  return <label>Add a new to do:</label>
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
  return <input type="submit" value="Create" onClick={props.handleClick}/>
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
