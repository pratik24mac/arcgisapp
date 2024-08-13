import React from "react";
import { ArcgisMap } from "@arcgis/map-components-react";

const MapViewComponent = ({ onMapReady, children }) => {
  return (
    <ArcgisMap
      center={[-74.9851659999999, 40.0541710000001]}
      zoom={9}
      basemap={"gray-vector"}
      onArcgisViewReadyChange={(event) => {
        onMapReady(event.target);
      }}
    >
      {children}
    </ArcgisMap>
  );
};

export default MapViewComponent;

