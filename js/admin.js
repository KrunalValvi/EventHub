// Admin Panel Validation Functions

function validateEvent() {
    var title = document.getElementById("title").value.trim();
    var venue = document.getElementById("venue").value.trim();
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var price = document.getElementById("price").value.trim();
    var description = document.getElementById("description").value.trim();

    document.getElementById("titleErr").innerHTML = "";
    document.getElementById("venueErr").innerHTML = "";
    document.getElementById("dateErr").innerHTML = "";
    document.getElementById("timeErr").innerHTML = "";
    document.getElementById("priceErr").innerHTML = "";
    document.getElementById("descErr").innerHTML = "";

    if (title === "") {
        document.getElementById("titleErr").innerHTML = "Please enter event title";
        return false;
    }

    if (title.length < 3) {
        document.getElementById("titleErr").innerHTML = "Title must be at least 3 characters long";
        return false;
    }

    if (venue === "") {
        document.getElementById("venueErr").innerHTML = "Please enter venue name";
        return false;
    }

    if (date === "") {
        document.getElementById("dateErr").innerHTML = "Please select event date";
        return false;
    }

    var today = new Date().toISOString().split("T")[0];
    if (date < today) {
        document.getElementById("dateErr").innerHTML = "Event date cannot be in the past";
        return false;
    }

    if (time === "") {
        document.getElementById("timeErr").innerHTML = "Please select event time";
        return false;
    }

    if (price === "") {
        document.getElementById("priceErr").innerHTML = "Please enter ticket price";
        return false;
    }

    var pricePattern = /^[0-9]+(\.[0-9]{1,2})?$/;
    if (!pricePattern.test(price)) {
        document.getElementById("priceErr").innerHTML = "Enter a valid price";
        return false;
    }

    if (parseFloat(price) < 0) {
        document.getElementById("priceErr").innerHTML = "Price cannot be negative";
        return false;
    }

    if (description === "") {
        document.getElementById("descErr").innerHTML = "Please enter event description";
        return false;
    }

    if (description.length < 20) {
        document.getElementById("descErr").innerHTML = "Description must be at least 20 characters long";
        return false;
    }

    return true;
}

function validateMovie() {
    var title = document.getElementById("title").value.trim();
    var genre = document.getElementById("genre").value;
    var duration = document.getElementById("duration").value.trim();
    var releaseDate = document.getElementById("releaseDate").value;
    var language = document.getElementById("language").value.trim();
    var rating = document.getElementById("rating").value;
    var description = document.getElementById("description").value.trim();

    document.getElementById("titleErr").innerHTML = "";
    document.getElementById("genreErr").innerHTML = "";
    document.getElementById("durationErr").innerHTML = "";
    document.getElementById("releaseDateErr").innerHTML = "";
    document.getElementById("languageErr").innerHTML = "";
    document.getElementById("ratingErr").innerHTML = "";
    document.getElementById("descErr").innerHTML = "";

    if (title === "") {
        document.getElementById("titleErr").innerHTML = "Please enter movie title";
        return false;
    }

    if (title.length < 2) {
        document.getElementById("titleErr").innerHTML = "Title must be at least 2 characters long";
        return false;
    }

    if (genre === "") {
        document.getElementById("genreErr").innerHTML = "Please select a genre";
        return false;
    }

    if (duration === "") {
        document.getElementById("durationErr").innerHTML = "Please enter movie duration";
        return false;
    }

    var durationPattern = /^[0-9]+$/;
    if (!durationPattern.test(duration)) {
        document.getElementById("durationErr").innerHTML = "Duration must be in minutes (numbers only)";
        return false;
    }

    if (parseInt(duration) < 30 || parseInt(duration) > 300) {
        document.getElementById("durationErr").innerHTML = "Duration must be between 30 and 300 minutes";
        return false;
    }

    if (releaseDate === "") {
        document.getElementById("releaseDateErr").innerHTML = "Please select release date";
        return false;
    }

    if (language === "") {
        document.getElementById("languageErr").innerHTML = "Please enter language";
        return false;
    }

    var languagePattern = /^[A-Za-z\s]+$/;
    if (!languagePattern.test(language)) {
        document.getElementById("languageErr").innerHTML = "Language must contain only letters";
        return false;
    }

    if (rating === "") {
        document.getElementById("ratingErr").innerHTML = "Please select a rating";
        return false;
    }

    if (description === "") {
        document.getElementById("descErr").innerHTML = "Please enter movie description";
        return false;
    }

    if (description.length < 20) {
        document.getElementById("descErr").innerHTML = "Description must be at least 20 characters long";
        return false;
    }

    return true;
}

function validateTheater() {
    var name = document.getElementById("name").value.trim();
    var city = document.getElementById("city").value.trim();
    var address = document.getElementById("address").value.trim();
    var capacity = document.getElementById("capacity").value.trim();

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("cityErr").innerHTML = "";
    document.getElementById("addressErr").innerHTML = "";
    document.getElementById("capacityErr").innerHTML = "";

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Please enter theater name";
        return false;
    }

    if (name.length < 3) {
        document.getElementById("nameErr").innerHTML = "Theater name must be at least 3 characters long";
        return false;
    }

    if (city === "") {
        document.getElementById("cityErr").innerHTML = "Please enter city name";
        return false;
    }

    var cityPattern = /^[A-Za-z\s]+$/;
    if (!cityPattern.test(city)) {
        document.getElementById("cityErr").innerHTML = "City must contain only letters";
        return false;
    }

    if (address === "") {
        document.getElementById("addressErr").innerHTML = "Please enter theater address";
        return false;
    }

    if (address.length < 10) {
        document.getElementById("addressErr").innerHTML = "Address must be at least 10 characters long";
        return false;
    }

    if (capacity === "") {
        document.getElementById("capacityErr").innerHTML = "Please enter seating capacity";
        return false;
    }

    var capacityPattern = /^[0-9]+$/;
    if (!capacityPattern.test(capacity)) {
        document.getElementById("capacityErr").innerHTML = "Capacity must be a number";
        return false;
    }

    if (parseInt(capacity) < 50 || parseInt(capacity) > 10000) {
        document.getElementById("capacityErr").innerHTML = "Capacity must be between 50 and 10000";
        return false;
    }

    return true;
}

function validateSettings() {
    var siteName = document.getElementById("siteName").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    document.getElementById("siteNameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";

    if (siteName === "") {
        document.getElementById("siteNameErr").innerHTML = "Please enter site name";
        return false;
    }

    if (siteName.length < 3) {
        document.getElementById("siteNameErr").innerHTML = "Site name must be at least 3 characters long";
        return false;
    }

    if (email === "") {
        document.getElementById("emailErr").innerHTML = "Please enter email address";
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email format";
        return false;
    }

    if (phone === "") {
        document.getElementById("phoneErr").innerHTML = "Please enter phone number";
        return false;
    }

    var phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneErr").innerHTML = "Enter a valid 10-digit phone number";
        return false;
    }

    return true;
}

function validatePasswordChange() {
    var currentPassword = document.getElementById("currentPassword").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    document.getElementById("currentPassErr").innerHTML = "";
    document.getElementById("newPassErr").innerHTML = "";
    document.getElementById("confirmPassErr").innerHTML = "";

    if (currentPassword === "") {
        document.getElementById("currentPassErr").innerHTML = "Please enter current password";
        return false;
    }

    if (newPassword === "") {
        document.getElementById("newPassErr").innerHTML = "Please enter new password";
        return false;
    }

    if (newPassword.length < 6 || newPassword.length > 12) {
        document.getElementById("newPassErr").innerHTML = "Password must be 6–12 characters long";
        return false;
    }

    var passFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/;
    if (!passFormat.test(newPassword)) {
        document.getElementById("newPassErr").innerHTML =
            "Password must contain at least 1 letter and 1 number";
        return false;
    }

    if (currentPassword === newPassword) {
        document.getElementById("newPassErr").innerHTML = "New password must be different from current password";
        return false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPassErr").innerHTML = "Please confirm new password";
        return false;
    }

    if (newPassword !== confirmPassword) {
        document.getElementById("confirmPassErr").innerHTML = "Passwords do not match";
        return false;
    }

    return true;
}
