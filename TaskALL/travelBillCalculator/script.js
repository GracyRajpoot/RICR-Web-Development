function formatCurrency(amount) {
    return amount.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function calculateBill() {
    const kmValue = document.getElementById("kmInput").value;
    const errorMsg = document.getElementById("errorMsg");
    const resultBox = document.getElementById("resultBox");
    const breakdownList = document.getElementById("breakdownList");

    errorMsg.textContent = "";
    resultBox.style.display = "none";
    breakdownList.innerHTML = "";

    if (kmValue === "" || isNaN(kmValue) || kmValue < 0) {
        errorMsg.textContent = "Please enter a non-negative number of kilometres";
        return;
    }

    let km = parseFloat(kmValue);
    let remainingKm = km;
    let totalBill = 0;

    // Fare slabs
    const slabs = [
        { limit: 10, rate: 11 },
        { limit: 40, rate: 10 },
        { limit: Infinity, rate: 9 }
    ];

    slabs.forEach(slab => {
        if (remainingKm > 0) {
            let chargedKm = Math.min(remainingKm, slab.limit);
            let cost = chargedKm * slab.rate;

            totalBill += cost;
            remainingKm -= chargedKm;

            breakdownList.innerHTML += `
                <li class="list-group-item">
                    ${chargedKm.toFixed(2)} km × Rs.${slab.rate} = Rs.${formatCurrency(cost)}
                </li>
            `;
        }
    });

    document.getElementById("totalBill").textContent =
        `Total Bill = Rs. ${formatCurrency(totalBill)}`;

    resultBox.style.display = "block";
}
