
window.onload=showSlides;

	document.getElementById("careers").onclick=career;
	function career(){
		window.location("../html/careers.html");//control transfer to careers page
	}
	var slideIndex = 1;
	showSlides(slideIndex);
	function plusSlides(n) {
    showSlides(slideIndex += n);
	}

	function currentSlide(n) {
  	showSlides(slideIndex = n);
	}
	function showSlides(n) {//function to respond for dots and arrow buttons
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  //onsole.log("slides"+slides[slideIndex-1]);
	  slides[slideIndex-1].style.display = "block";  
	  dots[slideIndex-1].className += " active";
	}
	


