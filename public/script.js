async function geocode() {
	const address = document.getElementById('addressInput').value;
	try {
		const response = await fetch(`/geocode?address=${encodeURIComponent(address)}`);
		const data = await response.json();
		if (data.results && data.results.length > 0) {
			const location = data.results[0].geometry.location;
			document.getElementById('result').innerText = `Latitude: ${location.lat}, Longitude: ${location.lng}`;
		} else {
			document.getElementById('result').innerText = 'No results found.';
		}
	} catch (error) {
		console.error('Error:', error);
		document.getElementById('result').innerText = 'Error getting the geocoded address.';
	}
}
