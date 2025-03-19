import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  // Import leaflet for custom icons
import "leaflet/dist/leaflet.css";

// Fix missing marker icon in Leaflet
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Positioning
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapLocation = ({ latitude, longitude, title }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%", borderRadius: "10px" }}
    >
      {/* Load OpenStreetMap Tiles */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Marker with fixed icon */}
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapLocation;
