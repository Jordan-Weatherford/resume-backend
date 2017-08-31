$(document).ready(function(){
    setViewHeights();
    setViewWidths();
    setVidHeight();
});

$(window).resize(function(){
    setViewHeights();
    setViewWidths();
    setVidHeight();
});

function setViewHeights(){
    var viewportHeight = $(window).height();
    var titleHeight = viewportHeight / 2.4;
    $(".intro-view").css("height", viewportHeight);
    $(".title-container").css("margin-top", titleHeight);
};

function setViewWidths(){
    var viewportWidth = $(window).width();

    if (viewportWidth < 850){
        $(".blah").css("width", "350px;");
        $(".skills-container").css("width", viewportWidth - 50);
    } else {
        $(".blah").css("width", "950px;")
        $(".skills-container").css("width", "750px;");
    };

};


function setVidHeight(){
    var width = $(".project-vid").width();
    $(".project-vid").css("height", width * 0.5625);
};
