document.addEventListener("DOMContentLoaded", function() { const unlockButton = document.querySelector(".unlock-button"); const textarea = document.querySelector("textarea");

unlockButton.addEventListener("click", function() {
    const passphrase = textarea.value.trim();
    if (passphrase.length === 0) {
        alert("Please enter your 24-word passphrase.");
    } else {
        console.log("Passphrase entered:", passphrase);
        alert("Attempting to unlock wallet...");
        // Add functionality here to verify passphrase
    }
});

});

