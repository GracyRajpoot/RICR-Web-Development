document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    function setError(id, message) {
        document.getElementById(id).textContent = message;
        valid = false;
    }

    function clearErrors() {
        document.querySelectorAll(".error").forEach(e => e.textContent = "");
        document.getElementById("successMsg").textContent = "";
    }

    clearErrors();

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const pinRegex = /^\d{6}$/;
    const percentageRegex = /^([0-9]{1,2}(\.[0-9]+)?|100)$/;
    const gradeRegex = /^[A-F]$/i;

    const name = fullName.value.trim();
    if (!name || !nameRegex.test(name)) setError("nameError", "Please enter a valid name");

    if (!emailRegex.test(email.value)) setError("emailError", "Please enter a valid email address");

    if (!mobileRegex.test(mobile.value)) setError("mobileError", "Enter a 10-digit Indian mobile number");

    if (!dob.value) {
        setError("dobError", "Please select your date of birth");
    } else {
        const age = new Date().getFullYear() - new Date(dob.value).getFullYear();
        if (age < 15) setError("dobError", "You must be at least 15 years old");
    }

    if (!qualification.value) setError("qualificationError", "Please select a qualification");

    if (!percentageRegex.test(percentage.value) && !gradeRegex.test(percentage.value)) {
        setError("percentageError", "Enter a valid percentage or grade (A-F)");
    }

    if (!course.value) setError("courseError", "Select a course");
    if (!batch.value) setError("batchError", "Select a batch timing");

    if (!address.value.trim()) setError("addressError", "Enter your full address");

    if (!nameRegex.test(city.value)) setError("cityError", "Please enter a valid city name");

    if (!pinRegex.test(pincode.value)) setError("pincodeError", "Enter a valid 6-digit pin code");

    if (!nameRegex.test(guardianName.value)) setError("guardianNameError", "Enter guardian's full name");

    if (!mobileRegex.test(guardianMobile.value)) {
        setError("guardianMobileError", "Enter a valid 10-digit contact number");
    }

    if (!source.value) setError("sourceError", "Select an option");

    if (valid) {
        document.getElementById("successMsg").textContent =
            "✅ Registration successful! Thank you for registering.";
        this.reset();
    }
});
