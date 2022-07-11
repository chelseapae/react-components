class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
        <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
      );
}
}

var GroceryList = (props) => {
  return (<ul id = 'app'>
    {props.groceries.map(item =>
      <GroceryListItem item={item}/>
      )}
  </ul>)
    };

var groceries = ['Avocado', 'Tortillas', 'Hot Sauce']


ReactDOM.render(<GroceryList groceries={groceries}/>, document.getElementById("app"))
