import { useEffect } from "react";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SizeStop from "@arcgis/core/renderers/visualVariables/support/SizeStop";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";
import ColorStop from "@arcgis/core/renderers/visualVariables/support/ColorStop";
import SimpleRenderer from "@arcgis/core/renderers/SimpleRenderer";
import template from "../Template/PopupTemplate";

const GeoJsonLayerComponent = ({ map }) => {
  useEffect(() => {
    const url =
      "https://services.arcgis.com/fLeGjb7u4uXqeF9q/arcgis/rest/services/LATEST_CORE_SITE_READINGS/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

    const simpleMarkerSymbol = new SimpleMarkerSymbol({ color: "green" });

    const sizeVariable = new SizeVariable({
      field: "PM25_UG_M3",
      stops: [
        new SizeStop({ value: 5, size: "4px" }), // Low PM2.5 value
        new SizeStop({ value: 12, size: "40px" }), // High PM2.5 value
      ],
    });

    const colorVariable = new ColorVariable({
      field: "PM25_UG_M3",
      stops: [
        new ColorStop({ value: 5, color: "blue" }), // Low PM2.5 value
        new ColorStop({ value: 12, color: "red" }), // High PM2.5 value
      ],
    });

    const simpleRenderer = new SimpleRenderer({
      symbol: simpleMarkerSymbol,
      visualVariables: [sizeVariable, colorVariable],
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    const layer = new GeoJSONLayer({
      url,
      popupTemplate: template,
      renderer: simpleRenderer,
    });

    map.add(layer);

    const point = new Point({
      longitude: -74.9851659999999,
      latitude: 40.0541710000001,
    });

    const graphic = new Graphic({
      geometry: point,
    });

    graphicsLayer.add(graphic);
    return () => {
      // Remove the GeoJSONLayer and GraphicsLayer from the map
      map.remove(layer);
      map.remove(graphicsLayer);
    };
  }, [map]);

  return null;
};

export default GeoJsonLayerComponent;
