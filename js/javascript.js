$(document).ready(function(){
   
   
   
    $('#title-slide').delay(1500).animate({
    	marginLeft:"+=33%",
    	opacity: 1
    	}, 500);
    	
    $('.logofb').delay(2000).animate({
    	opacity: 0.5
    	}, 400);
    	
    $('.logolkdn').delay(2300).animate({
    	opacity: 0.5
    	}, 400);
    	
    $('.logogit').delay(2600).animate({
    	opacity: 0.5
    	}, 400);
    
	 
	 
	 
	 $("#btn1").on("click", function(){
	 		$("#section1").toggle("slow","swing");
	 		$("#section2, #section3, #section4").hide("slow");
			$("#btn1").toggleClass("button-pressed");
			$("#btn2, #btn3, #btn4").removeClass("button-pressed");
	 });
	 
	  $("#btn2").on("click", function(){
	 		$("#section2").toggle("slow","swing");
			$("#section1, #section3, #section4").hide("slow");
			$("#btn2").toggleClass("button-pressed");
			$("#btn1, #btn3, #btn4").removeClass("button-pressed");		
	 });
	 
	  $("#btn3").on("click", function(){
	 		$("#section3").toggle("slow","swing");
			$("#section1, #section2, #section4").hide("slow")
			$("#btn3").toggleClass("button-pressed");
			$("#btn1, #btn2, #btn4").removeClass("button-pressed");	
	 });
	 
	  $("#btn4").on("click", function(){
	 		$("#section4").toggle("slow","swing");
	 		$("#section1, #section2, #section3").hide("slow");
			$("#btn4").toggleClass("button-pressed");
			$("#btn1, #btn2, #btn3").removeClass("button-pressed");
			
	 });
	 
	
	 
});
	 
	
	 

