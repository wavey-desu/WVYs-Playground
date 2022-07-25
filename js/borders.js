$(document).ready(function(){
let i = 0;
let t;

//hover on percentage circle number animation
$(".svg-wrapper3").hover(function(){ 
        t = setInterval(add , 10);
        function add() {
            if(i < 69){
                i+=1;
                $(".svgText3").html(i+"%");
            }
        }
        
    }, function(){
        $(".svgText3").html("0%");
        i = 0;
        clearInterval(t)
    });
//



})