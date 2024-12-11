// src/components/GoogleMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = ({ onLocationSelect }) => {
    const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 });

    const handleMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
        };
        setLocation(newLocation);
        onLocationSelect(newLocation);
    };

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={{ width: '100%', height: '400px' }}
                zoom={10}
                center={location}
                onClick={handleMapClick}
            >
                <Marker position={location} />
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
