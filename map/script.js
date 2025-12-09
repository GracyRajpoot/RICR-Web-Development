// Map of state names with X,Y coordinates (relative to map image)
const stateCoordinates = {
    "delhi": { x: 300, y: 170 },
    "punjab": { x: 240, y: 150 },
    "haryana": { x: 280, y: 165 },
    "rajasthan": { x: 220, y: 240 },
    "gujarat": { x: 200, y: 310 },
    "maharashtra": { x: 260, y: 380 },
    "mp": { x: 300, y: 320 },
    "madhya pradesh": { x: 300, y: 320 },
    "up": { x: 350, y: 230 },
    "uttar pradesh": { x: 350, y: 230 },
    "bihar": { x: 410, y: 250 },
    "west bengal": { x: 460, y: 280 },
    "odisha": { x: 420, y: 340 },
    "jharkhand": { x: 380, y: 300 },
    "chhattisgarh": { x: 360, y: 360 },
    "telangana": { x: 340, y: 430 },
    "andhra pradesh": { x: 370, y: 490 },
    "tamil nadu": { x: 330, y: 570 },
    "karnataka": { x: 280, y: 470 },
    "kerala": { x: 260, y: 560 },
    "assam": { x: 490, y: 190 },
    "nagaland": { x: 520, y: 200 },
    "manipur": { x: 510, y: 220 },
    "tripura": { x: 480, y: 260 }
};

function findLocation() {
    let search = document.getElementById("searchBox").value.toLowerCase().trim();

    if (!stateCoordinates[search]) {
        alert("State not found!");
        return;
    }

    let map = document.getElementById("indiaMap");
    let mapRect = map.getBoundingClientRect();

    let coord = stateCoordinates[search];

    // Create flag element
    let flag = document.createElement("div");
    flag.className = "flag";

    // Position relative to map size
    let xPercent = coord.x / 600; 
    let yPercent = coord.y / 900; 

    flag.style.left = (xPercent * map.width) + "px";
    flag.style.top = (yPercent * map.height) + "px";

    document.getElementById("mapContainer").appendChild(flag);
}
