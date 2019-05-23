//alert("hello");
window.onload=pageLoaded;
function pageLoaded(){
//'WRAPPER' FUNCTION FOR DOM LOGIC

	//GET DOM ELEMENTS WE'LL NEED
	var btn=document.getElementById("my-menu");
	var btn1=document.getElementById("breakFastMenu");
	var btn2=document.getElementById("lunchMenu");
	var btn3=document.getElementById("dinnerMenu");
	var btn4=document.getElementById("dessertMenu");
	var btn5=document.getElementById("drinkMenu");
	
	var btn6=document.getElementById("breakfast");
	var btn7=document.getElementById("lunch");
	var btn8=document.getElementById("dinner");
	var btn9=document.getElementById("dessert");
	var btn10=document.getElementById("drink");
	var buttons =document.getElementsByClassName("menu_list");
	
	/*btn.style.display = "none";*/
	
	btn1.style.display = "none";
	btn2.style.display = "none";
	btn3.style.display = "none";
	btn4.style.display = "none";
	btn5.style.display = "none";
	
	
	btn6.onclick= doStuff1;
	btn7.onclick= doStuff2;
	btn8.onclick= doStuff3;
	btn9.onclick= doStuff4;
	btn10.onclick= doStuff5;
	
	
		
		
		
	
	
	
		function doStuff1(){
		
		
		btn1.style.display="block";	// box2 appears
		btn6.style.background="#e7b30e";
			btn2.style.display = "none";
			btn3.style.display = "none";
			btn4.style.display = "none";
			btn5.style.display = "none";
			btn7.style.background="#fff";
			btn8.style.background="#fff";
			btn9.style.background="#fff";
			btn10.style.background="#fff";
			updateColor(1);
			
		
		
		
		
		}
		function doStuff2(){
		btn1.style.display = "none";
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
		btn5.style.display = "none";
		btn8.style.background="#fff";
		btn9.style.background="#fff";
		btn10.style.background="#fff";
		btn6.style.background="#fff";
		
		
		btn2.style.display="block";	// box2 appears
		btn7.style.background="#e7b30e";
		
		
		
		
		}
		function doStuff3(){
		btn1.style.display = "none";
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
		btn5.style.display = "none";
		btn7.style.background="#fff";
		btn9.style.background="#fff";
		btn10.style.background="#fff";
		btn6.style.background="#fff";
		
		
		btn3.style.display="block";	// box2 appears
		btn8.style.background="#e7b30e";
		
		
		
		
		}
		function doStuff4(){
		btn1.style.display = "none";
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
		btn5.style.display = "none";
		btn7.style.background="#fff";
		btn8.style.background="#fff";
		btn10.style.background="#fff";
		btn6.style.background="#fff";
		
		
		btn4.style.display="block";	// box2 appears
		btn9.style.background="#e7b30e";
		
		
		
		
		}
		function doStuff5(){
		btn1.style.display = "none";
		btn2.style.display = "none";
		btn3.style.display = "none";
		btn4.style.display = "none";
		btn5.style.display = "none";
		btn7.style.background="#fff";
		btn9.style.background="#fff";
		btn8.style.background="#fff";
		btn6.style.background="#fff";
		
		
		btn5.style.display="block";	
		btn10.style.background="#e7b30e";
		
		
		
		
		}
		
		function updateColor(x){
			buttons.forEach(function(item, index, array) {
				alert(item,index);
			});
		}
		
}