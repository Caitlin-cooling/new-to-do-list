import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      title: "",
      date: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleClick(e) {
    console.log(this.state.date)
    e.preventDefault();

    var newList = this.state.list.slice();
    newList.push(this.state.title);
    this.setState({list:newList})
  }

  handleTitleChange(e) {
    this.setState({title:event.target.value})
  }

  handleDateChange(e) {
    this.setState({date:event.target.value})
  }

  render() {
    let form;
    let todos;
    let element;
    let listItems;

    listItems = this.state.list.map((todo, i) => <li key={'todo-' + i}>{todo}</li>)
    todos = <ul>{listItems}</ul>

    form = <form>
            <Label/>
            <Information
              title={this.state.title}
              handleTitleChange={this.handleTitleChange}
              date={this.state.date}
              handleDateChange={this.handleDateChange}
            />
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
      <DueDate time={props.time} handleDateChange={props.handleDateChange}/>
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
  return <p>
    <input
      type="text"
      placeholder="Date Due"
      value={props.date}
      onChange={props.handleDateChange}
    />
  </p>
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
  );
