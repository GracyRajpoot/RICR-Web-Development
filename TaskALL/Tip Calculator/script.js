function calculateTip() {
    let bill = Number(document.getElementById("billAmount").value);
    let service = Number(document.getElementById("service").value);
    let people = Number(document.getElementById("people").value);

    if (bill === 0 || people === 0) {
        alert("Please enter valid values");
        return;
    }

    let tipAmount = bill * service;
    let totalBill = bill + tipAmount;
    let perPerson = totalBill / people;

    document.getElementById("amount").innerText = "₹" + perPerson.toFixed(2);
}
