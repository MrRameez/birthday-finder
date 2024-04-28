function calculateAge() {
    let birthdate = new Date(document.getElementById('birthdate').value);
    let today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    let monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    let nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDay());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1)
    }

    let timeUntilNextBirthday = nextBirthday - today;
    let days = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);
    seconds = 59 - seconds; // Reverse the seconds

    let result = "Your age is: (" + age + ") years. ";
    result += "There are (" + days + ") days, (" + hours + ") hours, (" + minutes + ") minutes, and (" + seconds + ") seconds left until your next birthday.";

    document.getElementById('result').innerText = result;

}
