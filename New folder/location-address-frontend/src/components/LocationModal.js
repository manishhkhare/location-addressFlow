// src/components/LocationModal.js
import React from 'react';

const LocationModal = ({ onEnableLocation, onSearchManually }) => (
    <div className="modal">
        <h3>Enable Location</h3>
        <p>Please enable your location or search manually to continue.</p>
        <button onClick={onEnableLocation}>Enable Location</button>
        <button onClick={onSearchManually}>Search Manually</button>
    </div>
);

export default LocationModal;
