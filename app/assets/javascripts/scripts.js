$(document).ready(function(){
    var width = $(window).width();
    setViewHeights();
});

$(window).resize(function(){
    setViewHeights();
});

function setViewHeights(){
    var viewportHeight = $(window).height();
    var viewportWidth = $(window).width();
    var titleHeight = viewportHeight / 2.4;

    $(".intro-view").css("height", viewportHeight);
    $(".title-container").css("margin-top", titleHeight);
    $(".profile-view").css("height", viewportHeight);

    if (viewportWidth > 480) {
        $(".skills-view").css("height", viewportHeight);
    }
};
