import React, { Component } from "react";
import { render } from "react-dom";
import MapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";

import CityPin from "./city-pin.js";
import CityInfo from "./city-info.js";

import CITIES from "./cities.json";

const TOKEN = ""; // Set your mapbox token here

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null
    };

    window.test = () => {
      this.setState({
        ...this.state,
        viewport: {
          ...this.state.viewport,
          zoom: this.state.viewport.zoom === 5 ? 1 : 5
        }
      });
    };
  }

  _updateViewport = viewport => {
    this.setState({ viewport });
  };

  _renderCityMarker = (city, index) => {
    return (
      <Marker
        key={`marker-${index}`}
        longitude={city.longitude}
        latitude={city.latitude}
      >
        <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
      </Marker>
    );
  };

  _renderPopup() {
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiYWxwYWdlZWsiLCJhIjoiY2w0dmZ5YzV3MWE4MjNjcDhkMm1mMHRyZSJ9.lvKTUNoN6dqSry4H_OxrLw"}
      >
        {CITIES.map(this._renderCityMarker)}

        {this._renderPopup()}

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>
      </MapGL>
    );
  }
}

// render(<App />, document.body.appendChild(document.createElement("div")));
export default App;
