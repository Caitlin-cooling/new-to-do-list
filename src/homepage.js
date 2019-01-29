import React from "react";
import ReactDOM from "react-dom";
import { PageTitle } from "./pagetitle.js";
import { ToDoList } from "./todolist.js";

export var HomePage = function(props) {
  return <div>
    <PageTitle/>
    <ToDoList list={props.list}/>
  </div>
}
