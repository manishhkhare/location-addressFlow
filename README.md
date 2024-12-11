# Location/Address Flow Application

This project implements a Location/Address Flow application where users can select and save their delivery addresses using Google Maps API. The application is built using **React** for the frontend and **Node.js** for the backend, with integration of state management tools and optional user authentication.

---

## Features

1. **Location Permission Request**:
   - A modal prompts users to enable location access or manually search for their address.
2. **Geolocation and Pin Selection**:
   - Users can fine-tune their location on a map and use a "Locate Me" button for automatic location detection.
3. **Delivery Address Form**:
   - Form fields for house/block number, road/area, and address categorization (e.g., Home, Office).
4. **Address Management**:
   - Allows users to view, update, delete, and search saved addresses.
5. **Bonus Features** (if implemented):
   - Save as Favorite for frequently used addresses.
   - Address validation for accuracy.
   - Map Preview for selected addresses.

---

## Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)
- Google Maps API key

---

## Setup Instructions

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend folder and add the following:
   ```env
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the frontend folder and add the following:
   ```env
   REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Project Structure

### Backend
```
backend/
|-- index.js        # Entry point for the backend server
|-- routes/
    |-- address.js  # API routes for address management
|-- models/
    |-- Address.js  # Address schema/model
|-- .env            # Environment variables
```

### Frontend
```
frontend/
|-- src/
    |-- components/
        |-- GoogleMapComponent.js  # Map integration
        |-- AddressForm.js         # Delivery address form
        |-- AddressList.js         # Saved addresses management
    |-- App.js                     # Main application
    |-- index.js                   # Entry point
    |-- reportWebVitals.js         # Optional performance metrics
    |-- .env                       # Environment variables
```

---

## Usage

1. **Enable Location**: Upon launching, grant location permissions or search for your location manually.
2. **Adjust Pin**: Drag the map pin to fine-tune your delivery location.
3. **Fill Address Form**: Provide details like house/block number, road/area, and save the address under a specific category.
4. **Manage Addresses**: View, edit, delete, or select a saved address for delivery.

---

## API Endpoints

### Base URL: `http://localhost:5000`

- **POST /save-address**
  - Save a new address.
  - **Body**:
    ```json
    {
      "houseNo": "123",
      "roadArea": "Main Street",
      "category": "Home",
      "location": {
        "lat": 37.7749,
        "lng": -122.4194
      }
    }
    ```

- **GET /addresses**
  - Retrieve all saved addresses.

- **PUT /update-address/:id**
  - Update an existing address.

- **DELETE /delete-address/:id**
  - Delete an address by ID.

---

## Additional Features

1. **Save as Favorite**: Mark frequently used addresses for quick access.
2. **Address Validation**: Ensures the entered address is valid and complete.
3. **Responsive Design**: The application is optimized for devices of all sizes.
4. **Error Handling**: Handles location permission denial, network issues, and invalid inputs gracefully.

---

## Troubleshooting

1. **Google Maps API Errors**:
   - Ensure your API key is valid and has the required permissions (Maps JavaScript API, Geocoding API).

2. **Backend Not Starting**:
   - Check the `.env` file and ensure all required environment variables are set.

3. **Frontend Not Connecting to Backend**:
   - Verify the backend server is running and the frontend API URLs are correctly configured.

---

## Future Improvements

- Integration with third-party services for address verification.
- Enhanced security with authentication and authorization.
- Caching recently searched addresses for faster access.

---

## License
This project is licensed under the MIT License. Feel free to modify and use it as per your requirements.

---

## Acknowledgments
- Google Maps API for providing location services.
- Open source libraries and tools used in the project.

