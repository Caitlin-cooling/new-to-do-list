import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import style from "react-datepicker/dist/react-datepicker.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export var CreateForm = function(props) {
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
