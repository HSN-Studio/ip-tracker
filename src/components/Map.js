import React, { useState, useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
function Map({ position }) {
  //States
  const [state, setstate] = useState("");

  // LifeCycle Methods
  useEffect(() => {
    flyToPos();
  }, [position]);

  // Regular Methods
  const flyToPos = () => {
    const { map } = state;
    if (map) {
      map.flyTo(position);
    }
  };

  //JSX
  return (
    <div className="map" id="map">
      <MapContainer
        center={[31.4504, 73.135]}
        zoom={13}
        whenCreated={(map) => setstate({ map })}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            IP Located Here. <br /> Accuracy 100%.
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

export default Map;
