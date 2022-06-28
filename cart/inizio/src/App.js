import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import Map, { Marker, Source, Layer, Popup } from "react-map-gl";
import react, { Component } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import marker from "./maps-and-flags.png";
import data from "./mappaMilano.json";
import data2 from "./mappaMilano.json";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.mapContainer = react.createRef();
  }
  // componentDidMount() {
  //   const { lng, lat, zoom } = this.state;
  //   const map = new mapboxgl.Map({
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   container: this.mapContainer.current,
  //   center: [lng, lat],
  //   zoom: zoom,
  //   accessToken:"pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw",
  //   });
  //   }

  componentDidMount() {
    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [
    //     {
    //       type: 'Feature',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: [-77.032, 38.913]
    //       },
    //       properties: {
    //         title: 'Mapbox',
    //         description: 'Washington, D.C.'
    //       }
    //     },
    //     {
    //       type: 'Feature',
    //       geometry: {
    //         type: 'Point',
    //         coordinates: [-122.414, 37.776]
    //       },
    //       properties: {
    //         title: 'Mapbox',
    //         description: 'San Francisco, California'
    //       }
    //     }
    //   ]
    // };

    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw";

    // const map = new mapboxgl.Map({
    //   container: "map",
    //   style: "mapbox://styles/mapbox/light-v10",
    //   center: [9.1818233, 45.4691489],
    //   zoom: 3,
    // });
  }

  render() {
    // const layerStyle = {
    //   id: "point",
    //   type: "circle",
    //   paint: {
    //     "circle-radius": 10,
    //     "circle-color": "#007cbf",
    //   },
    //   onclick:()=>{
    //     alert("ciso")
    //   },
    // };
    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [
    //     {type: 'Feature', geometry: {type: 'Point', coordinates: [-122.4, 37.8]}}
    //   ]
    // };

    // const Mapp = new mapboxgl.Map({

    //   center: [9.1818233, 45.4691489],
    //   container: "map", // container ID
    //   zoom: 13, // starting zoom
    //   style: "mapbox://styles/mapbox/streets-v11",
    // });
    // data2.map((val)=>{
    //   const markers = [
    //      ...marker,
    //      {
    //        marker:new mapboxgl.Marker().setLngLat(val.long, val.lat).addTo(map)
    //      }
    //     ]
    // })

    // const geojson = {
    //   type: 'FeatureCollection',
    //   features: [
    //     {type: 'Feature', geometry: {type: 'Point', coordinates: [9.1818233, 45.4691489]},properties: {
    //       title: 'Mapbox DC',
    //       description: '1714 14th St NW, Washington DC',
    //       'marker-color': '#3bb2d0',
    //       'marker-size': 'large',
    //       'marker-symbol': 'rocket'
    //     }}
    //   ]
    // };

    const layerStyle = {
      id: 'point',
      type: 'circle',
      paint: {
        'circle-radius': 10,
        'circle-color': '#007cbf'
      }
    };
    

    // 'circle-radius': 10,
    // 'circle-color': '#007cbf'

    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw";

    // const geojson = {
    //   type: "FeatureCollection",
    //   features: [
    //     {
    //       type: "Feature",
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-77.032, 38.913],
    //       },
    //       properties: {
    //         title: "Mapbox",
    //         description: "Washington, D.C.",
    //       },
    //     },
    //     {
    //       type: "Feature",
    //       geometry: {
    //         type: "Point",
    //         coordinates: [-122.414, 37.776],
    //       },
    //       properties: {
    //         title: "Mapbox",
    //         description: "San Francisco, California",
    //       },
    //     },
    //   ],
    // };

    

    // const map = new mapboxgl.Map({
    //   container: "map",
    //   style: "mapbox://styles/mapbox/light-v10",
    //   center: [-96, 37.8],
    //   zoom: 3,
    // });

    // // add markers to map
    // for (const feature of geojson.features) {
    //   // create a HTML element for each feature
    //   const el = document.createElement("div");
    //   el.className = "marker";

    //   // make a marker for each feature and add it to the map
    //   new mapboxgl.Marker(el)
    //     .setLngLat(feature.geometry.coordinates)
    //     .setPopup(
    //       new mapboxgl.Popup({ offset: 25 }) // add popups
    //         .setHTML(
    //           `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    //         )
    //     )
    //     .addTo(map);
    // }
    // for (const feature of data.features) {
    //   // create a HTML element for each feature
    //   const el = document.createElement('div');
    //   el.className = 'marker';
    
    //   // make a marker for each feature and add to the map
    //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(Map);
    // }
    return (
      <>
      {/* <div id="map"></div> */}
        {/* <div className="row">
          <div className="row">
            <Map
              initialViewState={{
                longitude: 9.1818233,
                latitude: 45.4691489,
                zoom: 14,
              }}
              style={{ width: 600, height: 400 }}
              mapStyle="mapbox://styles/mapbox/streets-v9"
              mapboxAccessToken="pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw"
            > */}
        {/* {data2.map((si) => {
                return (
<Marker
                longitude={si.long}
                latitude={si.lat}
                anchor="bottom"
                width={25}
                height={25}
              >
                <img src={marker} />
              </Marker>
                );
              })} */}
        {/* <Source id="my-data" type="geojson" data={data} >
                <Layer {...layerStyle}  />
              </Source> */}
        {/* </Map>
          </div>
        </div> */}
        {/* <div ref={this.mapContainer} className="map-container" /> */}
        {/* <Map
         initialViewState={{
          longitude: 9.1818233,
          latitude: 45.4691489,
          zoom: 10,
        }}
        style={{ width: 1000, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw"
      > */}
        {/* {data2.map(park => (
        <Marker
          latitude={park.lat}
          longitude={park.long}
        >
          <img src={marker} />
          </Marker>
      ))} */}
        {/* <Marker
          latitude={45.4691489}
          longitude={9.1818233}
        >
          <img src={marker}  width={25} height={25}/>
          </Marker>
             </Map> */}
        <Map
         initialViewState={{
          longitude: 9.1818233,
          latitude: 45.4691489,
          zoom: 10,
        }}
        style={{ width: 1000, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw"
      >
<Source id="my-data" type="geojson" data={data}>
      <Layer {...layerStyle} />
    </Source>
    {/* {data2.map((valore,index)=> {
      return <>
      <Marker
        key={`marker-${index}`}
        longitude={valore.long}
        latitude={valore.lat}
      >
        <img src={marker}  width={25} height={25}/>
      </Marker>
      </>
    })} */}
    
  </Map>;

        {/* <div id="map"></div> */}
      </>
    );
  }
}

export default App;
