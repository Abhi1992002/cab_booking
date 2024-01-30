import React from "react";
import { Layer, Source } from "react-map-gl";
import type {Position} from 'geojson';

type RouteLayerProps = {
    coordinates : Position[]
} 

export const RouteLayer = (props: RouteLayerProps) => {
    console.log(props.coordinates)
  return (
    <>
      <Source type="geojson" 
      data={{
        type : 'Feature',
        geometry : {
            type: "LineString", coordinates: props.coordinates
        },
        properties : {}
      }}
      >
        <Layer 
           type="line"
           layout={{'line-join':"round","line-cap":"square"}}
           paint={{"line-color":"#4ade80","line-width":4}}
        />
      </Source>
    </>
  );
};
