// To open and close sidebar
function openNav() {
    document.getElementById("nav-i").style.width = "300px";
}

function closeNav() {
    document.getElementById("nav-i").style.width = "0px";
}

$('body,html').click(function (e) {
    $('nav-i').css('width', '0px');
});


// for smooth scrolling to page sections
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1750);
                return false;
            }
        }
    });
});


// To create fade in/fade out elements
$(document).ready(function () {
    loopbox();
    function loopbox() {
        $('#one').fadeIn(750).delay(4000).fadeOut(750, function () {
            $('#two').fadeIn(750).delay(4000).fadeOut(750, function () {
                $('#three').fadeIn(750).delay(4000).fadeOut(750, function () {
                    loopbox();
                });
            });
        });
    }
});

// $('#one').hide(speed, callback);