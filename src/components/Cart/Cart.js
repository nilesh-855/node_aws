import React from "react";
import Item from "./Item/Item";
import './cart.scss';
function cart({ cart, totalItem, onRemoveClick }) {
  const isEmpty = totalItem === 0;
  // console.log(cart);
  const Emptycart = () => {
    return (
      <>
        <div className="empty_cart">
          <p>You have no item in your cart, Start the shopping now.</p>
        </div>
      </>
    );
  };
  const Filledcart = () => {
    return (
      <div className="container">
        <div className="title">Your Items are listed below...</div>
        <div className="items">
          <div style={{ background: "" }} />
          <div className="main">
            {cart.line_items.map((item) => {
              console.log(item);
              return <Item item={item} key={item.id} onRemoveClick={onRemoveClick} />;
            })}
          </div>
          <div style={{ background: "" }} />
        </div>
      </div>
    );
  };
  return (
    <div className="cart">
      <div className="continer">{isEmpty ? <Emptycart /> : <Filledcart />}</div>
    </div>
  );
}

export default cart;
