import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import TotalBox from "./components/TotalBox";
import Loading from "./components/Loading";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,Graticule,useZoomPan
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [45.4626482,9.0376489]
  },
  { markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
  { markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
  { markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
  { markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
  { markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
  { markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];
const width = 800;
const height = 600;

const CustomZoomableGroup = ({ children, ...restProps }) => {
  const { mapRef, transformString, position } = useZoomPan(restProps);
  return (
    <g ref={mapRef}>
      <rect width={width} height={height} fill="transparent" />
      <g transform={transformString}>{children(position)}</g>
    </g>
  );
};
function App() {
  return <div>
  <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{
        rotate: [-20.0, -52.0, 0],
        scale: 700
      }}>
    <CustomZoomableGroup center={[45.4626482,9.0376489]} zoom={9}>
      {(position) => (
        <>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter((d) => d.properties.REGION_UN === "Italy")
                .map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
            }
          </Geographies>
          <Marker coordinates={[45.4626482,9.0376489]}>
            <circle r={8 / position.k} fill="#F53" />
          </Marker>
          <Marker coordinates={[32.5825, 0.3476]}>
            <circle r={8 / position.k} fill="#F53" />
          </Marker>
        </>
      )}
    </CustomZoomableGroup>
  </ComposableMap>
</div>;
}

export default App;
