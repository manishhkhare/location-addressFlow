// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv')

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Example endpoint to save an address
let savedAddresses = [];

app.post('/save-address', (req, res) => {
    const address = req.body;
    savedAddresses.push(address);
    res.status(200).json({ message: 'Address saved successfully!', data: address });
});

app.get('/addresses', (req, res) => {
    res.status(200).json(savedAddresses);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
