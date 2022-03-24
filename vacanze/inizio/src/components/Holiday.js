import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react-corso-api.netlify.app/.netlify/functions/holiday";

const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);

  //funzione per scegliere il prossimo valore di selected e la possima vacanza
  const nextHoliday = () => {
    setSelected((pervValue) => {
      if (pervValue + 1 === data.data.length) {
        return 0;
      } else {
        return pervValue + 1;
      }
    });
  };

  const previousHoliday = () => {
    setSelected((pervValue) => {
      if (pervValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return pervValue - 1;
      }
    });
  };

  // const [isLoading, setIsLoading] = useState();
  //funzione per fare il fetch dei dati

  // if(data.success){
  //   console.log(data.data[selected]);
  // }

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data); //non contiene la lista la l'array della lista che li e stata passata quindi per accedere alla lista bisogna fare response.data.data cosi accediamo alla lista che abbiamo *fecatto*
      console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //usiamo un return condizionale
  if (data.success) {
    return (
      <>
        {
          //ternay operator per controllare il numero di vacanza
          data.data.length > 0 ? (
            <SingleHoliday
              {...data.data[selected]}
              next={nextHoliday}
              perv={previousHoliday}
            />
          ) : (
            <h4>Nessuna vacanza</h4>
          )
        }
      </>
    );
  } else {
    return <h2>Loading . . .</h2>;
  }
};

export default Holiday;
