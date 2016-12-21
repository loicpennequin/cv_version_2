$(document).ready(function(){
   
	 $("#btn1").click(function(){
	 		$("#section1").toggle("slow","swing");
	 		$("#section2, #section3, #section4").hide("slow");
			$("#btn1").toggleClass("button-pressed");
			$("#btn2, #btn3, #btn4").removeClass("button-pressed");	
	 });
	 
	  $("#btn2").click(function(){
	 		$("#section2").toggle("slow","swing");
			$("#section1, #section3, #section4").hide("slow");
			$("#btn2").toggleClass("button-pressed");
			$("#btn1, #btn3, #btn4").removeClass("button-pressed");		
	 });
	 
	  $("#btn3").click(function(){
	 		$("#section3").toggle("slow","swing");
			$("#section1, #section2, #section4").hide("slow")
			$("#btn3").toggleClass("button-pressed");
			$("#btn1, #btn2, #btn4").removeClass("button-pressed");	
	 });
	 
	  $("#btn4").click(function(){
	 		$("#section4").toggle("slow","swing");
	 		$("#section1, #section2, #section3").hide("slow");
			$("#btn4").toggleClass("button-pressed");
			$("#btn1, #btn2, #btn3").removeClass("button-pressed");
			
	 });
	 
});
	 
	
	 

