(function ($) {
    startTime();
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    //navigation
    $('.navigation').onePageNav({
        scrollOffset: 0
    });
    $(".navbar-collapse a").on('click', function () {
        $(".navbar-collapse.collapse").removeClass('in');
    });
    // Smooth scroll for the get started button
    $('.btn-get-started').on('click', function (e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }
        let bedTimes = findTime();
        var headerDiv = document.getElementById('sleep-section-heading');
        $('#sleep-section-heading').replaceWith("<h3>This is when you should set your alarm</h3>");
        // build html string for each time in the string
        let timeString = "Worse Times:<br>"
        for (i in bedTimes[0]) {
            timeString += bedTimes[1][i] + "<br>"
        }
        timeString += "<br>Better Times:<br>"
        for (i in bedTimes[1]) {
            timeString += bedTimes[1][i] + "<br>"
        }
        $("#times").replaceWith("<h3> " + timeString + " </h3>");
    });
    // Fixed navbar
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 200) {
            $('.navbar-default').css('display', 'block');
            $('.navbar-default').addClass('fixed-to-top');
        } else if (scrollTop == 0) {
            $('.navbar-default').removeClass('fixed-to-top');
        }
    });
    // Intro carousel
    var introCarousel = $("#introCarousel");
    var introCarouselIndicators = $("#intro-carousel-indicators");
    introCarousel.find(".carousel-inner").children(".item").each(function (index) {
        (index === 0) ?
        introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
            introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
        $(this).css("background-image", "url('" + $(this).children('.carousel-background').children('img').attr('src') + "')");
        $(this).children('.carousel-background').remove();
    });

    function navbar() {
        if ($(window).scrollTop() > 1) {
            $('#navigation').addClass('show-nav');
        } else {
            $('#navigation').removeClass('show-nav');
        }
    }
    $(document).ready(function () {
        var browserWidth = $(window).width();
        if (browserWidth > 560) {
            $(window).scroll(function () {
                navbar();
            });
        }
    });
    $(window).resize(function () {
        var browserWidth = $(window).width();
        if (browserWidth > 560) {
            $(window).scroll(function () {
                navbar();
            });
        }
    });

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        //document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
        $('#clock').html("<h3>" + h + ":" + m + ":" + s + "</h3>");
        var t = setTimeout(startTime, 500); // poll every half second
    }
    //animation
    new WOW().init();
})(jQuery);

function findTime() {
    let time = new Date();
    let timeInMins = time.getHours() * 60 + time.getMinutes();
    // ideal wake up times 
    let notSoGood = []; //curTime + 90,
    let bestTimes = [];
    for (let i = 1; i <= 7; i++) { // go up to 7 sleep cycles, what, you think you need more than that?!
        let bedMins = (timeInMins + i * 90 + 15) % 60;
        let minStr = (bedMins < 10) ? ("0" + bedMins) : bedMins;
        let bedTime = Math.floor((timeInMins + i * 90 + 15) / 60) + ":" + minStr;
        if (i <= 3)
            notSoGood.push(bedTime);
        else
            bestTimes.push(bedTime);
    }
    // not so good wakeup times
    return result = [notSoGood, bestTimes];
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}