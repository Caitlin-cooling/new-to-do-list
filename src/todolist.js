import './global.js';

export class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      listItems: [],
      list: props.list
    };
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(date) {
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

  handleClick(e) {
    this.setState({clicked: true})
  }

  render() {
    this.state.listItems = this.state.list.map((todo, i) =>
            <li key={'todo-' + i} >
              {todo['title']} is due {this.formatDate(todo['date'])}
            </li>)
    return (<ul>{this.state.listItems}</ul>)
  }
}
