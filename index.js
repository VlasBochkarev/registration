// const form = document.forms[0]
// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     if (form.rememb.checked) {
//         console.log("Я Тебя Запомнил! " + form.firstName.value + " " + form.lastName.value);
//     } else {
//         console.log("plese input yore name");
//     }
// })
// console.log(form);

// const form = document.forms[0];
// form.addEventListener("submit", (e) => {
//     e.preventDefault()


//     if (form.pass1.value === form.pass2.value) {

//         console.log("На почту " + form.eMail.value + "отправлено сообщение");
//     } else {
//         console.log("Password error");
//     }
// })


const firstNameResult = document.getElementById("firstNameResult")
const lastNameResult = document.getElementById("lastNameResult")
const birthdayResult = document.getElementById("birthdayResult")
const genderResult = document.getElementById("genderResult")
const countryResult = document.getElementById("countryResult")
const sityResult = document.getElementById("sityResult")
const skillResult = document.getElementById("skillResult")

const form = document.forms[0];
form.addEventListener('submit', (e) => {
    e.preventDefault()

    firstNameResult.textContent = form.firstName.value
    lastNameResult.textContent = form.lastName.value
    birthdayResult.textContent = form.birthday.value
    countryResult.textContent = form.country.value
    sityResult.textContent = form.sity.value
    skillResult.textContent = ""

    if (form.gender.value == "1") {
        genderResult.textContent = "Male"
    } else {
        genderResult.textContent = "Female"
    }
    if (form.skillHTML.checked) {
        skillResult.textContent += " HTML"
    }
    if (form.skillCSS.checked) {
        skillResult.textContent += " CSS"
    }
    if (form.skillJS.checked) {
        skillResult.textContent += " JS"
    }
    if (form.skillPHP.checked) {
        skillResult.textContent += " PHP"
    }
    if (form.skillC1.checked) {
        skillResult.textContent += " C++"
    }
    if (form.skillJAVA.checked) {
        skillResult.textContent += " JAVA"
    }
    if (form.skillC2.checked) {
        skillResult.textContent += " C#"
    }


})