$(function() {
    var _window = $(window);
    // slider
    $(".slider").owlCarousel({
        items: 1,
        nav: true,
        navText: [],
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    });
    // menu click
    $(".menu-icon").on('click', function() {
        $(".mobile-menu").toggleClass("open");
    });
    // resizing
    _window.on('resize', function() {
        if (_window.width() >= 1200) {
            if ($(".mobile-menu").hasClass("open")) {
                $(".mobile-menu").removeClass("open");
            }
            $(".first").appendTo(".leftMenu");
            $(".second").insertBefore(".rightMenu__item:first-child");
        } else {
            $(".first").appendTo(".menu");
            $(".second").appendTo(".menu");
        }
    });
    // call resize event
    _window.trigger('resize');
});

// video muting
// 1. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('ytPlayer', {
        videoId: '20TI3Ul9sQU', // YouTube Video ID
        width: 640,               // Player width (in px)
        height: 360,              // Player height (in px)
        playerVars: {
            autoplay: 1,        // Auto-play the video on load
            controls: 0,        // Show pause/play buttons in player
            showinfo: 0,        // Hide the video title
            modestbranding: 1,  // Hide the Youtube Logo
            loop: 1,            // Run the video in a loop
            fs: 0,              // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3,  // Hide the Video Annotations
            autohide: 0         // Hide video controls when playing
        },
        events: {
            onReady: function(e) {
                e.target.mute();
            }
        }
    });
}