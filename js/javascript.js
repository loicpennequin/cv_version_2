$(document).ready(function(){
   
    $("#btn1").click(function(){
        $("#section1").toggle("slow","swing");
        $("#btn1").fadeTo(500,1);
         });
    
    $("#btn2").click(function(){
        $("#section2").toggle("slow","swing");
        $("#btn2").fadeTo(500,1);
    });
    
    $("#btn3").click(function(){
        $("#section3").toggle("slow","swing");
        $("#btn3").fadeTo(500,1);
    });
    
    $("#btn4").click(function(){
        $("#section4").toggle("slow","swing");
        $("#btn4").fadeTo(500,1);
    });
});
