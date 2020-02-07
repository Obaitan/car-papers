function openNav() {
    document.getElementById("menu-toggle").style.display = "none";
    document.getElementById("nc-wrap").style.display = "flex";
    document.getElementById("nav-i").style.width = "300px";
}

function closeNav() {
    document.getElementById("menu-toggle").style.display = "block";
    document.getElementById("nc-wrap").style.display = "none";
    document.getElementById("nav-i").style.width = "60px";
}

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


