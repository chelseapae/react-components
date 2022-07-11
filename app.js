class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li>{this.props.item}</li>
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

// ReactDOM.render(<GroceryListItem />, document.getElementById("app"))

// var GroceryListItem = (props) => {
//   return (
//   <ul id = 'app'>
//   <li>{props.item[0]}</li>
//   <li>{props.item[1]}</li>
//   <li>{props.item[2]}</li>
// </ul>
// )
// };

// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem item={['Avocado', 'Tortillas', 'Hot Sauce']}/>
//   </div>
// );