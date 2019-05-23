jQuery(document).ready (function (){
$('form').hide();
    $('h3').click(function(){
$('form').toggle();
    });
});


let firstName = document.querySelector('#firstName');
let lastName = document.querySelector('#lastName');
let email = document.querySelector('#clientEmail');
let phoneNumber = document.querySelector('#clientPhone');
let guestAmount = document.querySelector('#guestAmount');
let resLocation = document.querySelector('#resLocation');


firstName.required = true;
lastName.required = true;
email.required = true;
phoneNumber.required = true;
guestAmount.required = true;
resLocation.required = true;
bookDate = true;
bookTime = true;
var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}$/im;

confirmBookingMsg.style.display = "none";
errorMsg.style.display = "none";

eventForm.addEventListener('submit', function(event){
    if(firstName.required && 
        lastName.required && 
        email.required && reEmail.test(email.value) && 
        phoneNumber.required && rePhone.test(phoneNumber.value) && guestAmount.required && resLocation.required
        && bookDate && bookTime){
    console.log('form successfully submitted')
    confirmBookingMsg.style.display = "block";
    //the line below prevents the page from opening up a new webpage,
    //which is the default, once clicking submit
    event.preventDefault()
    //the lines below allow the textboxes to clear once user clicks submit
    firstName.value = ""
    lastName.value = ""
    email.value = ""
    phoneNumber.value = ""
    guestAmount.value = ""
    resLocation.value = ""
}    else {
        event.preventDefault()
        errorMsg.style.display = "block";    
    }
 })
