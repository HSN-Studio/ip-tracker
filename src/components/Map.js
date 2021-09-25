import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
      map.setView(position);
    }
  };

  //JSX
  return (
    <div className="map" id="map">
      <MapContainer
        center={[31.4504, 73.1350]}
        zoom={13}
        whenCreated={(map) => setstate({ map })}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default Map;

//   if (!map) {
//     map = L.map("map", {
//       center: [48.864716, 2.349],
//       zoom: 16,
//       layers: [
//         L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
//           attribution:
//             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
//         }),
//       ],
//     });
//   }
