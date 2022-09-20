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

                <div class="input_container">
                    <label for="name">Full Name</label>
                    <input type="text" name="name" id="name">
                    <div class="error_msg">
                        <div id="name-error" class="error">Please enter your full name</div>
                    </div>
                </div>
                
                <div class="input_container">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email"></input>
                    <div class="error_msg">
                        <div id="email-error" class="error">Enter a valid email</div>
                    </div>
                </div>

                <div class="input_container">
                    <label>Subject</label>
                    <input type="subject" name="subject" id="subject"></input>
                    <div class="error_msg">
                        <div id="subject-error" class="error">Minimum length of 15</div>
                    </div>
                </div>

                <div class="input_container">
                    <label>Message</label>
                    <textarea type="textarea" name="textarea" id="textarea" rows="10" cols="50"></textarea>
                    <div class="error_msg">
                        <div id="text-error" class="error">Minimum length of 25</div>
                    </div>
                </div>
                
                <button class="submit_btn" id="submitbtn">Submit</button>
            </form>               
        </div>
    </div>`
                            
loader.classList.add("remove")


    /* Form Validation */


const form = document.querySelector(`form`);
const successfully = document.querySelector(`.successfully`)
const button = document.querySelector(".submit_btn")

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

    if (check(fullName.value, 5) && check(subject.value, 15) && checkEmail(email.value) && check(textArea.value, 25)) {
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