$(document).ready(function(){
   
	 $("#btn1").click(function(){
	 		$("#section1").toggle("slow","swing");
			$("#btn1").toggleClass("opacity-on");
			$("#btn1").toggleClass("white-shadow");	
			
	     /*$("#btn1").fadeTo(500,1); */
	      });
	 
	 $("#btn2").click(function(){
	     $("#section2").toggle("slow","swing");
	     $("#btn2").toggleClass("opacity-on");	
	     			$("#btn2").toggleClass("white-shadow");	
	 });
	 
	 $("#btn3").click(function(){
	     $("#section3").toggle("slow","swing");
	     $("#btn3").toggleClass("opacity-on");	
	     			$("#btn3").toggleClass("white-shadow");	
	 });
	 
	 $("#btn4").click(function(){
	     $("#section4").toggle("slow","swing");
	     $("#btn4").toggleClass("opacity-on");	
	     			$("#btn4").toggleClass("white-shadow");	
	 });
	 
    
});
