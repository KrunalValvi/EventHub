// General Validation Functions

function validateSearch() {
    var searchQuery = document.getElementById("searchQuery").value.trim();

    if (searchQuery === "") {
        alert("Please enter a search term");
        return false;
    }

    if (searchQuery.length < 2) {
        alert("Search term must be at least 2 characters long");
        return false;
    }

    return true;
}

function validatePayment() {
    var cardNumber = document.getElementById("cardNumber").value.trim();
    var cardName = document.getElementById("cardName").value.trim();
    var expiryDate = document.getElementById("expiryDate").value.trim();
    var cvv = document.getElementById("cvv").value.trim();

    document.getElementById("cardNumberErr").innerHTML = "";
    document.getElementById("cardNameErr").innerHTML = "";
    document.getElementById("expiryErr").innerHTML = "";
    document.getElementById("cvvErr").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    if (cardNumber === "") {
        document.getElementById("cardNumberErr").innerHTML = "Please enter card number";
        return false;
    }

    var cardPattern = /^[0-9]{16}$/;
    if (!cardPattern.test(cardNumber.replace(/\s/g, ''))) {
        document.getElementById("cardNumberErr").innerHTML = "Enter a valid 16-digit card number";
        return false;
    }

    if (cardName === "") {
        document.getElementById("cardNameErr").innerHTML = "Please enter cardholder name";
        return false;
    }

    if (!namePattern.test(cardName)) {
        document.getElementById("cardNameErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (expiryDate === "") {
        document.getElementById("expiryErr").innerHTML = "Please enter expiry date";
        return false;
    }

    var expiryPattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryPattern.test(expiryDate)) {
        document.getElementById("expiryErr").innerHTML = "Enter expiry date in MM/YY format";
        return false;
    }

    if (cvv === "") {
        document.getElementById("cvvErr").innerHTML = "Please enter CVV";
        return false;
    }

    var cvvPattern = /^[0-9]{3,4}$/;
    if (!cvvPattern.test(cvv)) {
        document.getElementById("cvvErr").innerHTML = "Enter a valid 3 or 4 digit CVV";
        return false;
    }

    return true;
}

function validateNewsletter() {
    var email = document.getElementById("newsletterEmail").value.trim();

    document.getElementById("newsletterErr").innerHTML = "";

    if (email === "") {
        document.getElementById("newsletterErr").innerHTML = "Please enter your email";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("newsletterErr").innerHTML = "Enter a valid email format";
        return false;
    }

    return true;
}

function validateReview() {
    var rating = document.querySelector('input[name="rating"]:checked');
    var reviewText = document.getElementById("reviewText").value.trim();
    var reviewerName = document.getElementById("reviewerName").value.trim();

    document.getElementById("ratingErr").innerHTML = "";
    document.getElementById("reviewErr").innerHTML = "";
    document.getElementById("reviewerNameErr").innerHTML = "";

    if (!rating) {
        document.getElementById("ratingErr").innerHTML = "Please select a rating";
        return false;
    }

    if (reviewerName === "") {
        document.getElementById("reviewerNameErr").innerHTML = "Please enter your name";
        return false;
    }

    var namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(reviewerName)) {
        document.getElementById("reviewerNameErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (reviewText === "") {
        document.getElementById("reviewErr").innerHTML = "Please write a review";
        return false;
    }

    if (reviewText.length < 10) {
        document.getElementById("reviewErr").innerHTML = "Review must be at least 10 characters long";
        return false;
    }

    if (reviewText.length > 500) {
        document.getElementById("reviewErr").innerHTML = "Review must not exceed 500 characters";
        return false;
    }

    return true;
}

// Helper function to clear all error messages
function clearErrors() {
    var errorElements = document.querySelectorAll('[id$="Err"], [id$="Error"]');
    errorElements.forEach(function(element) {
        element.innerHTML = "";
    });
}

// Real-time validation helpers
function validateEmailField(emailId, errorId) {
    var email = document.getElementById(emailId).value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    
    if (email !== "" && !emailPattern.test(email)) {
        document.getElementById(errorId).innerHTML = "Enter a valid email format";
    } else {
        document.getElementById(errorId).innerHTML = "";
    }
}

function validatePhoneField(phoneId, errorId) {
    var phone = document.getElementById(phoneId).value.trim();
    var phonePattern = /^[0-9]{10}$/;
    
    if (phone !== "" && !phonePattern.test(phone)) {
        document.getElementById(errorId).innerHTML = "Enter a valid 10-digit phone number";
    } else {
        document.getElementById(errorId).innerHTML = "";
    }
}

function validatePasswordField(passId, errorId) {
    var password = document.getElementById(passId).value.trim();
    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    
    if (password !== "" && !passFormat.test(password)) {
        document.getElementById(errorId).innerHTML = "Password must be 6-12 characters with at least 1 letter and 1 number";
    } else {
        document.getElementById(errorId).innerHTML = "";
    }
}
