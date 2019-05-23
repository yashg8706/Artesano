//alert("section-3");
window.onload = function(){
	var formhandle = document.forms.recepients_form;
	console.log(formhandle);
	formhandle.onsubmit = processform;
	var nameErrText;
	var emailErrText;
	var messageErrText;
	var thankdiv = document.getElementById("thanks_msg"); 
		thankdiv.style.display="none";                    //when window loads, hide thank you message.
	

		
		
	function processform() {
		var namevalue =  document.getElementById("in_Name");
		var emailvalue = document.getElementById("in-Email");
		var messagevalue = document.getElementById("in-Message");
		var thanksmsg1 = document.getElementById("thanksCustomerName");
		var thanksmsg2 = document.getElementById("thanksCustomerEmail");
		
			
	
			if(namevalue.value === "" || namevalue.value === null)
			{
				
				
				namevalue.focus();
				nameErrText = "Please enter your name";
				document.getElementById("in_Name").placeholder = nameErrText
				return false;				
			}if(emailvalue.value === "" || emailvalue.value === null){
			
				
				emailvalue.focus();
				emailErrText = "Please enter email";
				document.getElementById("in-Email").placeholder = emailErrText;
				return false;
				
			}if (messagevalue.value === "" || messagevalue.value === null){
			
				
				messagevalue.focus();
				messageErrText = "Please enter your message";
				document.getElementById("in-Message").placeholder = messageErrText; 
				return false;
				
			}else{
				
				thankdiv.style.display="block";  
				var displayName = namevalue.value;
				var displayEmail = emailvalue.value;
				document.getElementById("thanksCustomerName").innerHTML =displayName;
				document.getElementById("thanksCustomerEmail").innerHTML =displayEmail;					
				return false;		
			}
			
			
			return false;
		
	

		
	
		
	}
}
