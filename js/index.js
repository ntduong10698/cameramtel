$(function() {
    //responsive
    var width = $(window).width();
    if (width < 768) {
        console.log($('.nav-search .title-left span').text('MENU'));
    }
    $(window).resize(function() {
        //responsive nav-search
        width = $(window).width();
    })
})