import React from "react";
import { Link } from "react-router-dom";

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

const LocationMap = ( {latitude, longitude, title} ) => {

  return (
    
        <div >
          <div className="map-container">
            <MapContainer
              center={[latitude, longitude]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "300px", width: "100%", borderRadius: "10px" }}
            >
              {/* Load OpenStreetMap Tiles */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[latitude, longitude]} icon={customIcon}>
                <Popup>{title}</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="box-widget-content">
            <i className="fa fa-map-marker fa-2x text-danger"></i> Address: {title} 
          </div>
        </div>
        
  );
};

export default LocationMap;
