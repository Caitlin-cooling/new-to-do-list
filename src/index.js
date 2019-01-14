import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      hash: {},
      title: "",
      date: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    console.log("before hash", this.state.hash)

    this.state.hash['title'] = this.state.title;
    this.state.hash['date'] = this.state.date;

    var newHash = this.state.hash

    console.log("after hash", this.state.hash)

    var newList = this.state.list.slice();
    newList.push(newHash);
    console.log('list', newList)
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

    listItems = this.state.list.map((todo, i) => <li key={'todo-' + i}>{todo['title']} is due {todo['date']}</li>)
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
