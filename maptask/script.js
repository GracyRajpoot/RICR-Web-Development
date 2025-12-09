/*

 // --- India Map Geographic Bounds (adjusted for your map) ---
// Change these if needed for better accuracy
const LON_MIN = 68.0;     // Left edge of your map
const LON_MAX = 97.5;     // Right edge of your map
const LAT_MIN = 6.0;      // Bottom of map
const LAT_MAX = 37.0;     // Top of map

const marker = document.getElementById("marker");
const mapImg = document.getElementById("indiaMap");

// ⭐ Function: Convert latitude & longitude → pixel on map
function convertLatLonToPixels(lat, lon) {
    const imgWidth = mapImg.clientWidth;
    const imgHeight = mapImg.clientHeight;

    // Normalize values
    const xRatio = (lon - LON_MIN) / (LON_MAX - LON_MIN);
    const yRatio = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN);

    // Pixel positions
    const x = xRatio * imgWidth;
    const y = yRatio * imgHeight;

    return { x, y };
}

// ⭐ Main Function: Search & place marker
async function findLocation() {
    const place = document.getElementById("searchBox").value.trim();
    if (place === "") {
        alert("Please enter a city or state name!");
        return;
    }

    // API URL
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}&countrycodes=in&limit=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            alert("Location not found in India!");
            return;
        }

        // Extract lat, lon
        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);

        // Convert → pixel
        const pos = convertLatLonToPixels(lat, lon);

        // Place flag
        marker.style.left = pos.x + "px";
        marker.style.top = pos.y + "px";
        marker.style.display = "block";

    } catch (error) {
        alert("Error fetching location. Try again.");
        console.error(error);
    }
}
*/


// --- India Map Geographic Bounds (adjusted for your map) ---
const LON_MIN = 68.0;
const LON_MAX = 97.5;
const LAT_MIN = 6.0;
const LAT_MAX = 37.0;

const mapImg = document.getElementById("indiaMap");
const markersContainer = document.getElementById("markersContainer");

// Convert lat/lon → pixel on map
function convertLatLonToPixels(lat, lon) {
    const imgWidth = mapImg.clientWidth;
    const imgHeight = mapImg.clientHeight;

    const xRatio = (lon - LON_MIN) / (LON_MAX - LON_MIN);
    const yRatio = (LAT_MAX - lat) / (LAT_MAX - LAT_MIN);

    return { 
        x: xRatio * imgWidth, 
        y: yRatio * imgHeight 
    };
}

async function findLocation() {
    const place = document.getElementById("searchBox").value.trim();
    
    if (place === "") {
        alert("Please enter a city or state name!");
        return;
    }

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}&countrycodes=in&limit=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length === 0) {
            alert("Location not found in India!");
            return;
        }

        const lat = parseFloat(data[0].lat);
        const lon = parseFloat(data[0].lon);
        const pos = convertLatLonToPixels(lat, lon);

        //  Create a NEW flag
        const newFlag = document.createElement("div");
        newFlag.classList.add("marker");
        newFlag.innerHTML = "🚩";

        // Set its position
        newFlag.style.left = pos.x + "px";
        newFlag.style.top = pos.y + "px";

        // Add to container so old flags stay
        markersContainer.appendChild(newFlag);

    } catch (error) {
        alert("Error fetching location. Try again.");
        console.error(error);
    }
}
