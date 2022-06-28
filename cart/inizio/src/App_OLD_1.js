import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import { Map, Marker } from "pigeon-maps"
import react, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalIncome: 0,
    };
  }
  

  simone(){
    const prr = [
    {
      lat:45.450262,
      lang:9.1954279,
    },
    {
      lat:45.450262,
      lang:9.1954279,
    }
  ]
    for (let index = 0; index < prr.length; index++) {
      return<> <Marker width={50} anchor={[prr[index].lat,prr[index].lang]} /></>
    }

  //   {let id = document.getElementById("simone")
  //   var newDiv = document.createElement("Marker").setAttribute("ancor", "[45.4626482,9.0376489]");
  //   document.body.
  // }
  }
  test(){
    var element = document.getElementById('element');
      let a = customElements.define("Marker","Marker",{ anchor: [45.4626482,9.0376489], width: 50 });
      // a.anchor = [45.4626482,9.0376489];
      // a.width = 50
      a.setAttribute("width", "50")
      a.setAttribute("anchor", "[45.4626482,9.0376489]")
      document.body.appendChild(a)
  }


render(){
  return <div>
  <Map height={300} defaultCenter={[45.4626482,9.0376489]} defaultZoom={11} id="simone">
        {/* <Marker width={50} anchor={[45.4626482,9.0376489]} /> */}
        {/* {this.simone()}           */}
        {this.test()}          
        
      </Map>
  </div>;
}
  


}

export default App;
