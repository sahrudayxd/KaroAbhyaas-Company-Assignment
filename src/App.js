import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Classes from "./components/Classes";
import Products from "./components/Products";
import Account from "./components/Account";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
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
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter(
        (cartItem) => cartItem.name !== productName
      ),
    }));
  };

  render() {
    const { cartItems } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartItems,
          addCartItem: this.onAddCartItem,
          removeCartItem: this.onRemoveCartItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <ProtectedRoute exact path="/classes" component={Classes} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute exact path="/account" component={Account} />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
