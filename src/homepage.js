import './global.js';
import { ToDoList } from "./todolist.js";

export var HomePage = function(props) {
  return <div>
    <PageTitle/>
    <ToDoList list={props.list}/>
  </div>
}

var PageTitle = function(props) {
  return <h1>To Do List</h1>
}
