const contactContainer = document.querySelector(".contact_container");
const loader = document.querySelector(".loading_icon")

contactContainer.innerHTML +=
    `<div class="content_width contact_content">
        <h1>Contact</h1>
        <div class="contact_form">
        <div class="successfully">
        <p>You have successfully sent a message</p>
        </div>
            <form>
                <div class="label_container">
                    <label for="name">Full Name</label>
                    <div id="name-error" class="error">Please enter your full name</div>
                </div>
                <input type="text" name="name" id="name">
                <div class="label_container">
                    <label for="email">Email</label>
                    <div id="email-error" class="error">Enter a valid email</div>
                </div>
                <input type="email" name="email" id="email"></input>
                <div class="label_container">
                    <label>Subject</label>
                    <div id="subject-error" class="error">Minimum length of 15</div>
                </div>
                <input type="subject" name="subject" id="subject"></input>
                <div class="label_container">
                    <label>Message</label>
                    <div id="text-error" class="error">Minimum length of 25</div>
                </div>
                <textarea type="textarea" name="textarea" id="textarea" rows="10" cols="50"></textarea>
                <button class="submit_btn" id="submitbtn">Submit</button>
            </form>               
        </div>
    </div>`
                            
loader.classList.add("remove")


    /* Form Validation */


const form = document.querySelector(`form`);
const successfully = document.querySelector(`.successfully`)

const fullName = document.querySelector(`#name`);
const nameError = document.querySelector(`#name-error`);

const subject = document.querySelector(`#subject`);
const subjectError = document.querySelector(`#subject-error`);

const email = document.querySelector(`#email`);
const emailError = document.querySelector(`#email-error`);

const textArea = document.querySelector(`#textarea`);
const textError = document.querySelector(`#text-error`);

function formCheck(event) {
    event.preventDefault();

    if (check(fullName.value, 5) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };

    if (check(subject.value, 15) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    };

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };

    if (check(textArea.value, 25) === true) {
        textError.style.display = "none";
    } else {
        textError.style.display = "block";
    };

    if (check(fullName.value, 0) && check(subject.value, 10) && checkEmail(email.value) && check(textArea.value, 25)) {
    textArea.value = ""
    subject.value = ""
    successfully.style.display = "block"
    };
};

form.addEventListener("submit", formCheck);

function check(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    };
};

function checkEmail(email) {
    const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const match = regEx.test(email);
    return match;
};