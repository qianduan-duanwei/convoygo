$(function () {
    var $firstScreen = $('.first-screen');
    resizeFirstScreenBg();
    $(window).resize(function () {
        resizeFirstScreenBg()
    });

    function resizeFirstScreenBg() {
        var winHeight = $(window).height();
        $firstScreen.height(winHeight)
        var $secondH3=$('.index .second-screen').find('.text-item h3');
        $secondH3.height($secondH3.width());
        $secondH3.css('lineHeight',$secondH3.width()+'px');
    }
})
