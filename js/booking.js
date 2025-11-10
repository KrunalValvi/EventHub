// Booking and Seat Selection Validation

function validateSeatSelection() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var seats = document.getElementById("seats").value;

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";
    document.getElementById("seatsErr").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Please enter your name";
        return false;
    }
    if (!namePattern.test(name)) {
        document.getElementById("nameErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (phone === "") {
        document.getElementById("phoneErr").innerHTML = "Please enter your phone number";
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }

    if (seats === "" || seats <= 0) {
        document.getElementById("seatsErr").innerHTML = "Please select number of seats";
        return false;
    }

    if (seats > 10) {
        document.getElementById("seatsErr").innerHTML = "Maximum 10 seats can be booked at once";
        return false;
    }

    return true;
}

function validateEventBooking() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var tickets = document.getElementById("tickets").value;

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";
    document.getElementById("dateErr").innerHTML = "";
    document.getElementById("timeErr").innerHTML = "";
    document.getElementById("ticketsErr").innerHTML = "";

    var namePattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    var phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Please enter your name";
        return false;
    }
    if (!namePattern.test(name)) {
        document.getElementById("nameErr").innerHTML = "Name must contain only letters";
        return false;
    }

    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Please enter your email";
        return false;
    }
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (phone === "") {
        document.getElementById("phoneErr").innerHTML = "Please enter your phone number";
        return false;
    }
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }

    if (date === "") {
        document.getElementById("dateErr").innerHTML = "Please select a booking date";
        return false;
    }

    var today = new Date().toISOString().split("T")[0];
    if (date < today) {
        document.getElementById("dateErr").innerHTML = "Booking date cannot be in the past";
        return false;
    }

    if (time === "") {
        document.getElementById("timeErr").innerHTML = "Please select a booking time";
        return false;
    }

    if (tickets === "" || tickets <= 0) {
        document.getElementById("ticketsErr").innerHTML = "Please select number of tickets";
        return false;
    }

    if (tickets > 10) {
        document.getElementById("ticketsErr").innerHTML = "Maximum 10 tickets can be booked at once";
        return false;
    }

    return true;
}
