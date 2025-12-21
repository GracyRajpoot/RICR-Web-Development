function calculateBill() {
    const units = document.getElementById("unitsInput").value;
    const errorMsg = document.getElementById("errorMsg");
    const resultCard = document.getElementById("resultCard");
    const breakdown = document.getElementById("billBreakdown");

    errorMsg.textContent = "";
    breakdown.innerHTML = "";
    resultCard.style.display = "none";

    if (units === "" || isNaN(units) || units <= 0 || !Number.isInteger(Number(units))) {
        errorMsg.textContent = "Please enter a valid positive integer number of units";
        return;
    }

    let remaining = Number(units);

    const slabs = [
        { limit: 50, rate: 0.50 },
        { limit: 150, rate: 0.75 },
        { limit: 250, rate: 1.20 },
        { limit: Infinity, rate: 1.50 }
    ];

    let subtotal = 0;

    slabs.forEach(slab => {
        let usedUnits = Math.min(remaining, slab.limit);
        let cost = usedUnits * slab.rate;

        subtotal += cost;
        remaining -= usedUnits;

        breakdown.innerHTML += `
            <li class="list-group-item">
                ${usedUnits} units × ₹${slab.rate} = ₹${cost.toFixed(2)}
            </li>
        `;
    });

    let surcharge = subtotal * 0.20;
    let total = subtotal + surcharge;

    breakdown.innerHTML += `
        <li class="list-group-item fw-bold">
            Subtotal: ₹${subtotal.toFixed(2)}
        </li>
        <li class="list-group-item fw-bold">
            Surcharge (20%): ₹${surcharge.toFixed(2)}
        </li>
        <li class="list-group-item fw-bold text-success">
            Grand Total: ₹${total.toFixed(2)}
        </li>
    `;

    resultCard.style.display = "block";
}

function resetForm() {
    document.getElementById("unitsInput").value = "";
    document.getElementById("errorMsg").textContent = "";
    document.getElementById("billBreakdown").innerHTML = "";
    document.getElementById("resultCard").style.display = "none";
}
