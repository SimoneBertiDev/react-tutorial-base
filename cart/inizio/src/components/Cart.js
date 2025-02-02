import React from "react";
import products from "../products";
import CartItem from "./CartItem";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useGlobalContext } from "../context/context";
const Cart = () => {
  const {products:prodotti, deleteAll} = useGlobalContext();
  // // const state = useGlobalContext();
  // if(prodotti.length > 0){
  //     console.log(prodotti);
  // }


  return (
    <section className="section-center " style={{ marginTop: "2rem" }}>
      <div className="cart-info">
        <h6>Item</h6>
        <h6 className="prd-name">Nome</h6>
        <h6>Qty</h6>
        <h6>Prezzo</h6>
        <button className="btn icon-btn">
          <MdRemoveShoppingCart className="icon minus-icon" onClick={deleteAll}/>
        </button>
      </div>
      <hr />
      <section className="cart-section">
        {prodotti.map((product) => {
          return <CartItem key={product._id} {...product} />;
        })}
      </section>
    </section>
  );
};

export default Cart;
