var GroceryList = () => (
  <ul id = 'app'>
    <Apples />
    <Bananas />
  </ul>
);

var Apples = () => (
  <li>Apples</li>
);

var Bananas = () => (
  <li>Bananas</li>
);

var GroceryListItem = (props) => (
  <ul id = 'app'>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
    <li>{props.item[2]}</li>
  </ul>
);


var Items = () => (
  <div>
    <GroceryListItem item={['Avocado', 'Tortillas', 'Hot Sauce']}/>
  </div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"))
//ReactDOM.render(<GroceryListItem />, document.getElementById("app"))
// ReactDOM.render(<Items />, document.getElementById("app"))
