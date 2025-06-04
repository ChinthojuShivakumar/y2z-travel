import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CharminarMap = () => {
  const charminarPosition = [17.3616, 78.4747];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={charminarPosition}
        zoom={17} // Closer zoom for Charminar view
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={charminarPosition}>
          <Popup>Charminar, Hyderabad</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CharminarMap;
