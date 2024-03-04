import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Checkout from "./components/Checkout/Checkout";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalItem, setTotalItem] = useState(0);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
    setTotalItem(cart.total_items);
  };
  const handleAddToCart = async (productId, quantity) => {
    const responce = await commerce.cart.add(productId, quantity);
    fetchCart();
  };
  const handleRemoveTocart = async (productId)=>{
    // console.log('removeClicked');
    const responce =await commerce.cart.remove(productId);
    fetchCart();
  }
  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);
  // console.log(products);
  // console.log(cart);
  // console.log(cart.total_items);
  return (
    <BrowserRouter>
      <div className="App">
        <Header totalItem={totalItem} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Products products={products} onAddClick={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            exact
            element={
              <Cart
                cart={cart}
                totalItem={totalItem}
                onRemoveClick={handleRemoveTocart}
              />
            }
          />
          <Route path="/checkout" exact element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
