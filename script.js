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

function flip(evt){

}

function pulsate(element, descriptionElement) {
    console.log(descriptionElement)
    $(element || this).animate({opacity: 0}, 500, function() {
        $(element).hide();
        $(descriptionElement).show().animate({ opacity:1},1000);
    });
}

$(document).ready(function(){
    bounce();
    $("mouse-click-icon").click(scrollToaboutus);
    $("what-we-do-icon").click(function(evt){
        pulsate(clickedElement, $(clickedElement).prev());
    });

    $(".description").hover(function(){
        pulsate(this, $(this).next());
    });

    $("contactusform").submit(function(evt){
        console.log('form submitted');
        evt.preventDefault();

        const form =evt.target;
        if(!form.checkvalidity()){
            $(form).find('.alert').html("check missing fields").show();
            return;
        }


    });
});
