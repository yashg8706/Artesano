//alert("section-3");
window.onload = function(){
	var formhandle = document.forms.contact_Us;
	//console.log(formhandle);
	formhandle.onsubmit = processform;
		
	var nameErrText;
	var phoneErrText;
	var emailErrText;
	var messageErrText;
	var thankdiv = document.getElementById("thanks_msg"); 
		thankdiv.style.display="none";                    //when window loads, hide thank you message.
	

		
		
	function processform() {
		var namevalue =  document.getElementById("in_Name");
		var phonevalue = document.getElementById("in-Phone");
		var emailvalue = document.getElementById("in-Email");
		var messagevalue = document.getElementById("in-Message");
		var thanksmsg = document.getElementById("thanksCustomer");
		
			if(namevalue.value === "" || namevalue.value === null)
			{
				console.log("name");
			namevalue.focus();
			nameErrText = "Please enter your name";
			document.getElementById("in_Name").placeholder = nameErrText;
			
			return false;
		}else if(phonevalue.value === "" || phonevalue.value === null){
			
			phonevalue.focus();
			phoneErrText = "Please enter phone number";
			document.getElementById("in-Phone").placeholder = phoneErrText;				
			return false;
			
		}
		else if(emailvalue.value === "" || emailvalue.value === null){
			
			emailvalue.focus();
			emailErrText = "Please enter email";
			document.getElementById("in-Email").placeholder = emailErrText;
			return false;
			
		}
		else if(messagevalue.value === "" || messagevalue.value === null){
			
			messagevalue.focus();
			messageErrText = "Please enter comment";
			document.getElementById("in-Message").placeholder = messageErrText; 
			return false;
			
		}
	
		
		else{
			
			
			
			thankdiv.style.display="block";  
			
			var displayvalue = namevalue.value;
			
			document.getElementById("thanksCustomer").innerHTML =displayvalue;
			console.log(displayvalue);
			
			
	
			
		
		
		
		return false;
		
		
		
		}
		
		
			return false;
		
	

		
	
		
	}
	
		
}