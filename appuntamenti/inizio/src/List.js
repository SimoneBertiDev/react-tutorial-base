import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
const List = (props) => {
  // console.log(props);
  return (
    <ul className="user-list">
      {props.data.map((person) => {
        return (
          <li key={person.id}>
            <Person {...person} removeItem={props.RemoveItem} />
          </li>
        );
      })}
    </ul>
  );
};

const Person = ({ id, nome, stato, img, removeItem }) => {
  return (
    <article>
      <img src={img} alt="person-img" className="person-img" />
      <div className="person-info">
        <div className="person-action">
          <h4>{nome}</h4>
          <button className="btn" onClick={() => removeItem(id)}>
            <RiDeleteBack2Fill className="icon" />
          </button>
        </div>
        <p>{stato}</p>
      </div>
    </article>
  );
};

export default List;
