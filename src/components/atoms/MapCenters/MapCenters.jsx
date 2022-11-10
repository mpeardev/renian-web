import { Map } from "mapbox-gl";
import { useLayoutEffect } from "react";
import { useRef } from "react";

export const MapCenters = () => {
  const mapDiv = useRef(null);

  useLayoutEffect(() => {
    const map = new Map({
      container: mapDiv.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-77.04650891939855, -12.077114010146587],
      zoom: 14,
    });
  }, []);

  return (
    <div>
      <div ref={mapDiv} style={{ height: "35rem", width: "100%" }}></div>
    </div>
  );
};
