import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  //passa alla prossima slide
  const prossimaSLide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };
  //passa alla precedente slide
  const precedenteSLide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return recensioni.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      prossimaSLide();
    }, 9000);
    // console.log(timer);//restituisce un id
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="container slider">
      {recensioni.map((recensione, index) => {
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          index + 1 === active ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }

        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}
      <div className="btn-group slider-btn-group">
        <button
          className="btn btn-slider perv-slider"
          onClick={precedenteSLide}
        >
          perv
        </button>
        <button className="btn btn-slider next-slider" onClick={prossimaSLide}>
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
