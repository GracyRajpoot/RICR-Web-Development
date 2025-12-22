// ES6 function that calculates salary details
const calculateSalary = (basic) => {
    const hra = basic * 0.20; // 20% HRA
    const da = basic * 0.50;  // 50% DA
    const gross = basic + hra + da;

    return {
        basic,
        hra,
        da,
        gross
    };
};

// Indian Rupee formatter
const formatINR = (amount) => {
    return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    });
};

function handleCalculate() {
    const basicSalary = Number(document.getElementById("basicSalary").value);

    if (basicSalary <= 0) {
        alert("Please enter a valid basic salary");
        return;
    }

    const salary = calculateSalary(basicSalary);

    document.getElementById("basicResult").innerText = formatINR(salary.basic);
    document.getElementById("hraResult").innerText = formatINR(salary.hra);
    document.getElementById("daResult").innerText = formatINR(salary.da);
    document.getElementById("grossResult").innerText = formatINR(salary.gross);
}

function resetData() {
    document.getElementById("basicSalary").value = "";

    document.getElementById("basicResult").innerText = "₹0.00";
    document.getElementById("hraResult").innerText = "₹0.00";
    document.getElementById("daResult").innerText = "₹0.00";
    document.getElementById("grossResult").innerText = "₹0.00";
}
