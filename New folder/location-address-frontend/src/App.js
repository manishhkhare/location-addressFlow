// src/App.js
import React, { useState } from 'react';
import GoogleMapComponent from './components/GoogleMapComponent';
import LocationModal from './components/LocationModal';
import AddressForm from './components/AddressForm';

const App = () => {
    const [location, setLocation] = useState(null);
    const [showModal, setShowModal] = useState(true);

    const handleEnableLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
            setShowModal(false);
        });
    };

    const handleSearchManually = () => {
        setShowModal(false);
    };

    return (
        <div>
            {showModal && (
                <LocationModal
                    onEnableLocation={handleEnableLocation}
                    onSearchManually={handleSearchManually}
                />
            )}
            {location && (
                <>
                    <GoogleMapComponent onLocationSelect={setLocation} />
                    <AddressForm selectedLocation={location} />
                </>
            )}
        </div>
    );
};

export default App;
