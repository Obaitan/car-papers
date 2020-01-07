function openNav() {
    document.getElementById("menu-toggle").style.display = "none";
    document.getElementById("nav").style.width = "300px";
    document.getElementById("main").style.marginRight = "300px";
    // document.getElementById("bg-1").style.marginRight = "300px";
}


function closeNav() {
    document.getElementById("menu-toggle").style.display = "block";
    document.getElementById("nav").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    // document.getElementById("bg-1").style.marginRight = "0";
}


$('#showbox').click(function () {

    $('#nav').show(function () {
        document.body.addEventListener('click', navCloser, false);
    })
});

function navCloser(e) {
    if (e.target.id != 'nav') {
        document.body.removeEventListener('click', navCloser, false);
        $('#nav').hide();
    }
}


// $(".effect-zoe figcaption").mouseover(function () {
//     $(this).siblings("img").css({
//         opacity: '.25',
//         transition: '.5s'
//     });
// });

// $(".effect-zoe figcaption").mouseover(function () {
//     $(this).siblings("img").css({
//         opacity: '1',
//         transition: '.5s'
//     });
// });


$(document).ready(function () {
    // Add smooth scrolling to all links
    $('a[href*="#"]').on('click', function (event) {
        // Make sure this.hash has a value before overriding default behaivour
        if (this.hash !== "") {
            // Prevent default anchor click behaivour
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                // Add hash to URL when done scrolling (default click behaivour)
                window.location.hash = hash;
            });
        }
    });
});

// $('a[href*="#"]').on('click', function (e) {
//     e.preventDefault()

//     $('html, body').animate(
//         {
//             scrollTop: $($(this).attr('href')).offset().top,
//         },
//         1500,
//         'linear'
//     )
// });

