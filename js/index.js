$(document).ready(function(){

    window.onload = function () {
        sectionSelect(window.location.hash);
    }
    window.onhashchange = function () {
        sectionSelect(window.location.hash);
    }

    // $(".cardsSect").css("visibility", "hidden");
    // $(".borderSect").css("visibility", "hidden");
    // $(".scrollSect").css("visibility", "hidden");

    $(".cardsSect").hide();
    $(".borderSect").hide();
    $(".scrollSect").hide();
    $(".buttonsSect").addClass("activeSection");

    function sectionSelect(hash){
        $(".activeSection").fadeOut(600,"linear");
        $(".section").removeClass("activeSection");

        setTimeout (()=> {
            switch (hash){
     
                case "":
                    $(".buttonsSect").fadeIn(600,"linear")
                    $(".buttonsSect").addClass("activeSection");
                break;

                case "#buttons":
                    $(".buttonsSect").fadeIn(600,"linear")
                    $(".buttonsSect").addClass("activeSection");
                break;
    
                case "#cards":
                    $(".cardsSect").fadeIn(600,"linear")
                    $(".cardsSect").addClass("activeSection");
                break;

                case "#borders":
                    $(".borderSect").fadeIn()
                    $(".borderSect").addClass("activeSection");

                break;
                case "#scroll":
                    
                    $(".scrollSect").fadeIn()
                    $(".scrollSect").addClass("activeSection");

                break;
            }
            
        },800)
    }
});