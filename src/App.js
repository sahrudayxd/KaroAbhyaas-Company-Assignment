import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Classes from "./components/Classes";
import Products from "./components/Products";
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import CartContext from "./Context/cartContext";

import "./App.css";

class App extends Component {
  state = {
    cartItems: [],
  };

  onAddCartItem = (productDetails) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, productDetails],
    }));
  };

  onRemoveCartItem = (productName) => {
    // this.setState((prevState) => ({
    //   cartItems: [prevState.cartItems.filter(cartItem.name !== productName)],
    // }));
  };

  render() {
    const { cartItems } = this.state;
    return (
      <Switch>
        <CartContext.Provider
          value={{
            cartItems,
            addCartItem: this.onAddCartItem,
            removeCartItem: this.onRemoveCartItem,
          }}
        >
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </CartContext.Provider>
      </Switch>
    );
  }
}

export default App;
