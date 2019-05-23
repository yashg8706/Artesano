//alert('Hello World!');

jQuery(document).ready (function (){

$('form').hide();

$('h3').click(function(){
    $(this).next('form').slideToggle(1000);
});

});

//form validation is below

let hostHostessForm = document.querySelector('#hostHostess');
let firstNameHost = document.querySelector('#fnameHost');
let lastNameHost = document.querySelector('#lnameHost');
let emailHost = document.querySelector('#emailHost');
let phoneNumberHost = document.querySelector('#phoneHost');


firstNameHost.required = true;
lastNameHost.required = true;
emailHost.required = true;
phoneNumberHost.required = true;
//the email regex is from the website below. it validates email addresses with multiple characters, it's case insensitive, and validates any domain.
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
var reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//the phone regex is taken from the website below. it validates phone numbers with spaces, dashes and validates phone numbers with 9 or 10 digits only.
//https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
var rePhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,4}$/im;

applyMsg1.style.display = "none";
errorMsg1.style.display = "none";

hostHostessForm.addEventListener('submit', function(event){
    if(firstNameHost.required && 
        lastNameHost.required && 
        emailHost.required && reEmail.test(emailHost.value) && 
        phoneNumberHost.required && rePhone.test(phoneNumberHost.value)){
    console.log('form successfully submitted')
    applyMsg1.style.display = "block";    
    //the line below prevents the page from opening up a new webpage,
    //which is the default once clicking submit
    event.preventDefault()
    //the lines below allow the textboxes to clear once user clicks submit
    firstNameHost.value = ""
    lastNameHost.value = ""
    emailHost.value = ""
    phoneNumberHost.value = ""

}    else {
        event.preventDefault()
        errorMsg1.style.display = "block";     
    }
 })


let chefForm = document.querySelector('#chef');
let firstNameChef = document.querySelector('#fnameChef');
let lastNameChef = document.querySelector('#lnameChef');
let emailChef = document.querySelector('#emailChef');
let phoneNumberChef = document.querySelector('#phoneChef');


firstNameChef.required = true;
lastNameChef.required = true;
emailChef.required = true;
phoneNumberChef.required = true;

applyMsg2.style.display = "none";
errorMsg2.style.display = "none";


chefForm.addEventListener('submit', function(event){
    if(firstNameChef.required && 
        lastNameChef.required && 
        emailChef.required && reEmail.test(emailChef.value) && 
        phoneNumberChef.required && rePhone.test(phoneNumberChef.value)){
    console.log('form successfully submitted')
    applyMsg2.style.display = "block"; 
    event.preventDefault()
    firstNameChef.value = ""
    lastNameChef.value = ""
    emailChef.value = ""
    phoneNumberChef.value = ""
}    else {
        event.preventDefault()
        errorMsg2.style.display = "block";     
    }
 })


