document.addEventListener("DOMContentLoaded", function () {
    const logIn = localStorage.getItem("logIn");

    if (logIn === "false") {
        window.location.href = "index.html";
    }

    const infoProfile = document.querySelector(".infoProfile");
    const editProfile = document.querySelector(".editProfile");

    const nameElem = document.getElementById("name");
    const emailElem = document.getElementById("email");
    const regionElem = document.getElementById("region");
    const cityElem = document.getElementById("city");
    const zipCodeElem = document.getElementById("zipCode");
    const streetElem = document.getElementById("street");
    const streetNumberElem = document.getElementById("streetNumber");

    const editName = document.getElementById("editName");
    const editEmail = document.getElementById("editEmail");
    const editRegion = document.getElementById("editRegion");
    const editCity = document.getElementById("editCity");
    const editZipCode = document.getElementById("editZipCode");
    const editStreet = document.getElementById("editStreet");
    const editStreetNumber = document.getElementById("editStreetNumber");

    const editButton = document.getElementById("editButton");
    const saveButton = document.getElementById("saveButton");
    const cancelButton = document.getElementById("cancelButton");

    function loadProfile() {
        const shippingInfo = JSON.parse(localStorage.getItem("shippingInfo"));
        if (shippingInfo) {
            nameElem.textContent = `Name: ${shippingInfo.userName || ""}`;
            emailElem.textContent = `Email: ${shippingInfo.email || ""}`;
            regionElem.textContent = `Region: ${shippingInfo.region || ""}`;
            cityElem.textContent = `City: ${shippingInfo.city || ""}`;
            zipCodeElem.textContent = `ZIP Code: ${shippingInfo.zip || ""}`;
            streetElem.textContent = `Street: ${shippingInfo.street || ""}`;
            streetNumberElem.textContent = `Street Number: ${shippingInfo.streetNumber || ""}`;

            editName.value = shippingInfo.userName || "";
            editEmail.value = shippingInfo.email || "";
            editRegion.value = shippingInfo.region || "";
            editCity.value = shippingInfo.city || "";
            editZipCode.value = shippingInfo.zip || "";
            editStreet.value = shippingInfo.street || "";
            editStreetNumber.value = shippingInfo.streetNumber || "";
        }
    }

    function validateInputs() {
        let isValid = true;
        const inputs = [editName, editEmail, editRegion, editCity, editZipCode, editStreet, editStreetNumber];
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = "red";
                isValid = false;
            } else {
                input.style.borderColor = "";
            }
        });
        saveButton.disabled = !isValid;
        return isValid;
    }

    editButton.addEventListener("click", function () {
        infoProfile.style.display = "none";
        editProfile.style.display = "block";
    });

    saveButton.addEventListener("click", function () {
        if (!validateInputs()) {
            return;
        }

        const updatedInfo = {
            userName: editName.value.trim(),
            email: editEmail.value.trim(),
            region: editRegion.value.trim(),
            city: editCity.value.trim(),
            zip: editZipCode.value.trim(),
            street: editStreet.value.trim(),
            streetNumber: editStreetNumber.value.trim(),
        };

        localStorage.setItem("shippingInfo", JSON.stringify(updatedInfo));
        loadProfile();
        editProfile.style.display = "none";
        infoProfile.style.display = "block";
    });

    cancelButton.addEventListener("click", function () {
        editProfile.style.display = "none";
        infoProfile.style.display = "block";
    });

    document.querySelectorAll(".editProfile input").forEach(input => {
        input.addEventListener("input", validateInputs);
    });

    loadProfile();
    validateInputs();  // Initial validation check
});
