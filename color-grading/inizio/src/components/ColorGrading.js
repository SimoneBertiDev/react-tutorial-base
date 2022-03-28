import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  const [isError, setIsError] = useState(false);
  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 2,
  });
  const [selectedColor, setSelectedColor] = useState([]);

  // const color = new Values('rgb(0, 153, 255)');
  // console.log(color.all(20));

  const hendleSubmit = (e) => {
    e.preventDefault();
    // console.log(colorInput);
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      try {
        setSelectedColor(
          new Values(color).all(Math.round(100 / parseInt(qty, 10)) * 2)
        );
        setColorInput({
          color: "",
          qty: 10,
        });
      } catch (error) {
        setIsError(true);
      }
    }
  };

  // console.log(uuidv4());

  const handleChange = (e) => {
    // console.log(e.target.value);
    if(isError){
      setIsError(false)
    }
    const { name, value } = e.target;
    setColorInput({
      ...colorInput,
      [name]: value,
    });
  };

  useEffect(() => {
    setColorInput({ qty: 10, color: "" });
    setSelectedColor(new Values("#1194ec").all(Math.round(100 / 10) * 2));
  }, []);

  // console.log(selectedColor);
  return (
    <>
      <form className="form" onSubmit={hendleSubmit}>
        <div className="input-group">
          <input
            type="text"
            neme="color"
            id="color"
            onChange={handleChange}
            value={colorInput.color}
            className="input"
            maxLength={7}
          />
          <input
            type="number"
            neme="qty"
            id="qty"
            onChange={handleChange}
            value={colorInput.qty}
            className="input"
            max={100}
            min={2}
            step={2}
          />
        </div>
        <button className="btn btn-selector" type="submit">
          color
        </button>
      </form>
      <section className="color-section">
        {isError ? (
          <h4 className="section-center"> Nessun colore trovato</h4>
        ) : selectedColor.length > 0 ? (
          selectedColor.map((el) => <SingleColor key={uuidv4()} {...el} />)
        ) : (
          <h4>Loading . . .</h4>
        )}
      </section>
    </>
  );
};

export default ColorGrading;
