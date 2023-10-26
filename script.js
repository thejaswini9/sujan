let names = document.getElementById("name")
let mail = document.getElementById("email")
let phone = document.getElementById("phone")
let password = document.getElementById("password")
let date = document.getElementById("date")
let time = document.getElementById("time")
let re = document.getElementById("res")


let capText = document.getElementById("captchaText")
let capEnter = document.getElementById("captchaEnter")
let refresh = document.getElementById("refreshBtn")
let check = document.getElementById("checkBtn")
let res = document.getElementById("result")
let chars = "123456789ABCDEFGHIJKKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let submitBtn = document.getElementById("submit") 

let captcha

// captcha generation
function newCaptcha() {
    captcha = ""
    for (i = 0; i < 6 ; i++) {
        let index = Math.floor(Math.random() * chars.length);
        captcha = captcha + chars[index]
    }
    capText.value = captcha
}


newCaptcha()

// creating html elements dynamically
function display() {
    let contain = document.createElement("div") 
    re.appendChild(contain) 

    let namePara = document.createElement('p') 
    namePara.textContent = `Name : ${names.value} ` 
    contain.appendChild(namePara) 

     let emailPara = document.createElement("p");
     emailPara.textContent = `Email : ${mail.value}`;
     contain.appendChild(emailPara); 

      let phonePara = document.createElement("p");
      phonePara.textContent = `Phone : ${phone.value}` ;
      contain.appendChild(phonePara);

      let datePara = document.createElement("p");
      datePara.textContent = `Date : ${date.value}` ;
      contain.appendChild(datePara);
}


function validating(event) {
    event.preventDefault();      // Prevent the form from submitting

    if (captcha === capEnter.value && (names.value!=="" && mail.value!=="" && phone.value!=="" && date.value!=="")) {
        res.textContent = "Valid Captcha !!! Success"; 
        
        display() 

        // let displayText = `
        // Name: ${names.value}<br>
        // Email: ${mail.value}<br>
        // Phone: ${phone.value}<br>
        // Date: ${date.value}<br> 
        // `;
        // re.innerHTML = displayText; 
        // names.value=""
        // mail.value="" 
        // phone.value=""
        // date.value=""
        // password.value=""

    }  
   

    else {

        res.textContent = "";
        alert("Invalid Captcha !!! Try again");
        capEnter.value = "";
    }
}



submitBtn.onclick = validating;  //checking for captcha validation

refresh.onclick = newCaptcha;    //will get new captcha when wee refresh it