import React, { useState } from "react";
import MapViewComponent from "./Components/Core/MapViewComponent";
import GeoJsonLayerComponent from "./Components/GeoJSONLayer/GeoJsonLayerComponent";
import MapControls from "./Components/Controls/MapControls";

const App = () => {
  const [view, setView] = useState(null);
  const [map, setMap] = useState(null);

  const handleMapReady = (viewInstance) => {
    setView(viewInstance);
    setMap(viewInstance.map);
  };

  return (
    <div className="responsive-div">
      <MapViewComponent onMapReady={handleMapReady}>
        {view && <MapControls/>}
        {map && <GeoJsonLayerComponent map={map} />}
      </MapViewComponent>
    </div>
  );
};

export default App;

