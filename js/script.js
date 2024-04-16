
const accessToken = 'FwkrIHSI2Crwa8qFdole7Y2VdC7sFhDQJOMWizAndysmYIwvBU9ZVBqyeJNZGc90'; // Replace 'ACCESS_TOKEN' with your actual access token
const url = 'https://api.genius.com/songs/378195'; // Change '/some-endpoint' to your actual endpoint

// Make the GET request with custom headers
fetch(url, {
    method: 'GET',
    headers: {
        'User-Agent': 'CompuServe Classic/1.22',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    }
})
.then(response => {
    // Check if the request was successful
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse JSON data from the response
})
.then(data => {
    console.log(data); // Handle the data from the response
})
.catch(error => {
    console.error('Error fetching data: ', error); // Handle errors
});


function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results
    if (data.hits && data.hits.length > 0) {
        data.hits.forEach(hit => {
            const element = document.createElement('div');
            element.innerHTML = `
                <h4>${hit.result.title}</h4>
                <p>by ${hit.result.primary_artist.name}</p>
            `;
            resultsContainer.appendChild(element);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
}
