import React from "react";
import { MdDelete } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useGlobalContext } from "../context/context";
import formatNumber from "../utils/formatNumber";
const CartItem = ({ _id, name, image, price, qty, countInStock }) => {
  const { products, deleteItem, addQty, dimQty } = useGlobalContext();
  const prova = useGlobalContext();
  // console.log(prova);
  const aggiungiQty = (_id) => {
    if (qty + 1 > countInStock) {
      return;
    }
    return addQty(_id);
  };
  const diminusiciQty = (_id) => {
    if (qty - 1 <= 0) {
      return deleteItem(_id);
    }
    return addQty(_id);
  };
  return (
    <article className="cart-item">
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <p className="prd-name">{name}</p>
      <div className="qty-selector">
        <button className="btn icon-btn">
          <BiPlus className="icon" onClick={() => aggiungiQty(_id)} />
        </button>
        <p>{qty}</p>
        <button className="btn icon-btn">
          <BiMinus
            className="icon minus-icon"
            onClick={() => diminusiciQty(_id)}
          />
        </button>
      </div>
      <p>{formatNumber(price)}</p>
      <button className="btn icon-btn">
        <MdDelete className="icon minus-icon" onClick={() => deleteItem(_id)} />
      </button>
    </article>
  );
};

export default CartItem;
