import React, { useState } from "react";
import Gelato from "./Gelato";
import axios from "axios";
import data from "../fakeData";

const url = "https://react-corso-api.netlify.app/.netlify/functions/gelateria";

const Menu = () => {
  //Loading state for data fatching
  const [isLoadind, setIsLoadind] = useState(true);

  //error Heandling state
  const [isError, setError] = useState(false);

  //tutti i Prodotti
  const [prodotti, setProdotti] = useState(data);

  //active BTN selector
  const [selected, setSelected] = useState(0);

  //Prodotti filter from the prodotti state
  const [filterProducts, setFilterProducts] = useState();

  //categorie di prodotto
  const [categorie, setCategorie] = useState([]);

  //Categorie di prodotti
  // const categoria = Array.from(new Set(prodotti.map((el) => el.categoria)));
  // categoria.unshift("all");

  const filtraPro = (categoria, index) => {
    setSelected(index);
    if (categoria === "all") {
      setFilterProducts(prodotti);
    } else {
      setFilterProducts(
        prodotti.filter((el) => (el.categoria === categoria ? el : ""))
      );
    }
  };

  React.useEffect(() => {
    //Funzione eseguita immediatamente
    (async () => {
      setIsLoadind(true);
      setError(false);
      try {
        const response = await axios.get(url);
        // console.log(response.data);
        setProdotti(response.data.data.default);
        setFilterProducts(response.data.data.default);

        //categorie Array
        const nuoveCategorie = Array.from(
          new Set(response.data.data.default.map((el) => el.categoria))
        );
        nuoveCategorie.unshift("all");
        setCategorie(nuoveCategorie);
        setIsLoadind(false);
        setError(false);
      } catch (error) {
        console.log(error);
        setIsLoadind(false);
        setError(true);
      }
    })();
  }, []);



  // console.log(categoria);
  // console.log(prodotti);
  return (
    <div className="container">
      <h4 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Le nostre scelte
      </h4>
      {!isLoadind && !isError ? (
        <>
          <div className="lista-categorie">
            {categorie.map((categoria, index) => {
              return (
                <button
                  key={index}
                  onClick={() => filtraPro(categoria, index)}
                  className={`btn btn-selector ${
                    index === selected && "active"
                  }`}
                >
                  {categoria}
                </button>
              );
            })}
          </div>
          <div className="vetrina">
            {filterProducts.map((el) => {
              return <Gelato key={el.id} {...el} />;
            })}
          </div>
        </>
      ) : !isLoadind && isError ? (
        <h4
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "trasform(-50%, -50%",
          }}
        >
          Error . . .
        </h4>
      ) : (
        <h4
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "trasform(-50%, -50%",
          }}
        >
          Loading . . .
        </h4>
      )}
    </div>
  );
};

export default Menu;
