import React from "react";
import {
  ArcgisSearch,
  ArcgisZoom,
  ArcgisLegend,
  ArcgisHome,
} from "@arcgis/map-components-react";

const MapControls = () => {
  return (
    <>
    <ArcgisHome position="top-left"></ArcgisHome>
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisZoom position="bottom-right"></ArcgisZoom>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </>
  );
};

export default MapControls;
