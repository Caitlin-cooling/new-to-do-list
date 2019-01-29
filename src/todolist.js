import React from "react";
import ReactDOM from "react-dom";

export var ToDoList = function(props) {
  let listItems;

  function formatDate(date) {
    var dd = date.getDate();
    var mm = date.getMonth() + 1;

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy;
  }

  listItems = props.list.map((todo, i) => <li key={'todo-' + i} >{todo['title']} is due {formatDate(todo['date'])}</li>)
  return <ul>{listItems}</ul>
}
