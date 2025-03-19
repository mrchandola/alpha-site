import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";  
import "leaflet/dist/leaflet.css";

// Custom Leaflet Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const MapLocation = ({ locations }) => {
  return (
    <MapContainer
      center={[locations[0].latitude, locations[0].longitude]} // Center on the first location
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%", borderRadius: "10px" }}
    >
      {/* Load OpenStreetMap Tiles */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Render Multiple Markers */}
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.latitude, loc.longitude]} icon={customIcon}>
          <Popup>{loc.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

// Example Usage:
const locationsData = [
  { latitude: 25.276987, longitude: 55.296249, title: "Dubai, UAE" },
  { latitude: 28.7041, longitude: 77.1025, title: "New Delhi, India" },
  { latitude: 40.7128, longitude: -74.006, title: "New York, USA" }
];

export default function App() {
  return <MapLocation locations={locationsData} />;
}
