import React from "react";
import ReactDOM from "react-dom";
import { HomePage } from "./homepage.js";
import { CreateForm } from "./createform.js";
import { NavBar } from "./navbar.js";
import { Shapes } from "./shapes.js";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

ReactDOM.render(
    <App/>,
    document.getElementById('index')
  );
