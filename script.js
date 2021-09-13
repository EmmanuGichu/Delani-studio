function bounce(){
    $("mouse-click-icon")
    .animate({
        margintop: "-30px",
        position: "absolute"
    }, 500)
    .animate({
        margintop:"0",
        position:"absolute"
    },{
        duration:500,
        complete:bounce
    });

}

function scrollToaboutus(){
    const position = $("aboutus.section").positon();
    console.log(position); 
    $("html, body").animate({
        scrollTop:positon.top+"px"
    }, 500);
    // scrollTo(0, position.top);
}

$(document).ready(function(){
    bounce();
    $("mouse-click-icon").click(scrollToaboutus);
     
});