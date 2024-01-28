const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Geocoding endpoint
app.get('/geocode', async (req, res) => {
	const address = req.query.address;
	const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

	try {
		const response = await axios.get(url);
		res.json(response.data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Error fetching data from Google Maps API' });
	}
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
