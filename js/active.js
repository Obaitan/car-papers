// To open and close sidebar
function openNav() {
    document.getElementById("nav-i").style.width = "300px";
}

function closeNav() {
    document.getElementById("nav-i").style.width = "0px";
}


// (function () {
//     // get sidebar element
// var sidebar = document.getElementById('nav-i');

//     function closeNav() {
//         sidebar.style.width = "0px";
//     }

//     // get all `a` tags inside sidebar
// var aTags = sidebar.getElementsByTagName('a');

//     // for each tag
// aTags.forEach(function (a) {
//         // add click event listener to execute closeNav on `click`
// a.addEventListener('click', closeNav);
// });
// })();


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