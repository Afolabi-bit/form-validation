const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');


function isEmailValid(mail) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@']+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail);

}


// HELPER FUNCTIONS
function setError(input){
   const label = input.parentElement;
   const errorMsg = label.querySelector('p')
    
   // PRINT ERROR MESSAGE
   let placeHolder = input.getAttribute('placeholder');
const message = placeHolder + " cannot be empty"

   errorMsg.textContent = message;

   //ADD ERROR CLASS
   label.className = "error"
}
function setSuccess(input){
   const label = input.parentElement;
   const errorMsg = label.querySelector('p')
    
   // PRINT ERROR MESSAGE
  
const message = ''

   errorMsg.textContent = message;

   //ADD ERROR CLASS
   label.className = ""
}



function validateForm(e){
    e.preventDefault();

    //VALUES

    const firstnameVal = firstname.value.trim();
    const lastnameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim().length;

    //FIRSTNAME
    if(firstnameVal == '' || firstnameVal == null) {
    setError(firstname)
    }else {
    setSuccess(firstname)
    }

    //LASTNAME
    if(lastnameVal == '' || lastnameVal == null) {
    setError(lastname)
    }
    else {
    setSuccess(lastname)
    }

    //EMAIL
    if(emailVal == '' || emailVal == null) {
    setError(email)
    } else if (!isEmailValid(emailVal)) {
    let thisLabel = email.parentElement;
    let thisErrorMsg = thisLabel.querySelector('p')
    thisErrorMsg.textContent = 'Looks like this is not an  email';
    thisLabel.className = 'error';
    } else {
    setSuccess(email)
    }


    //PASSWORD
    if(passwordVal < 1) {
    setError(password)
    } else {
    setSuccess(password)
    }
}

    form.addEventListener('submit', validateForm);