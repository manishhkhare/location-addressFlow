// src/components/AddressForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = ({ selectedLocation }) => {
    const [formData, setFormData] = useState({
        houseNo: '',
        roadArea: '',
        category: 'Home',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { ...formData, location: selectedLocation };
        await axios.post('http://localhost:5000/save-address', data);
        alert('Address saved!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="houseNo"
                placeholder="House/Flat/Block No."
                value={formData.houseNo}
                onChange={handleChange}
            />
            <input
                type="text"
                name="roadArea"
                placeholder="Apartment/Road/Area"
                value={formData.roadArea}
                onChange={handleChange}
            />
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Friends & Family">Friends & Family</option>
            </select>
            <button type="submit">Save Address</button>
        </form>
    );
};

export default AddressForm;
