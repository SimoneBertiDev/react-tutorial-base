import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

const getValueLocalStorange = () =>{
  if(localStorage.getItem('theme')){
    return localStorage.getItem('theme');
  }
  // else {
  //   return "light-mode";
  // }
}

function App() {
  const [theme, setTheme] = useState(getValueLocalStorange() || "light-mode" );
  //funzione che cambia il tema a seconda del suo valore
  // document.documentElement.className='prova';
  const cambiaColore = () => {
    if(theme === "light-mode"){
      setTheme('dark-mode')
    }
    else{
      setTheme("light-mode")
    }
  };

  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme)
  },[theme])

  // console.log(theme);
  
  return (
    <section className="section-center">
      <div className="container">
        <button className="btn" onClick={cambiaColore}>CAMBIA</button>
        <section className="article-section">
          {data.map((el) => {
            return <Articolo key={el.id} {...el} />;
          })}
        </section>
      </div>
    </section>
  );
}

export default App;
