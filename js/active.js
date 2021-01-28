// for smooth scrolling to page sections
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1750
        );
        return false;
      }
    }
  });
});

// To open and close sidebar
let sideBarOpen = false;
function openNav() {
  sideBarOpen = true;
  document.getElementById("nav").style.width = "275px";
}

function closeNav() {
  sideBarOpen = false;
  document.getElementById("nav").style.width = "0px";
}

// Closing sidebar by menu item clicks and by clicking outside sidebar
$(function () {
  $(".nav-link").on("click", function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    closeNav();
  });

  $("#page-wrap").on("click", function (event) {
    closeNav();
  });
});

// To create fade in/fade out elements
$(document).ready(function () {
  loopbox();
  function loopbox() {
    $("#one")
      .fadeIn(750)
      .delay(4000)
      .fadeOut(750, function () {
        $("#two")
          .fadeIn(750)
          .delay(4000)
          .fadeOut(750, function () {
            $("#three")
              .fadeIn(750)
              .delay(4000)
              .fadeOut(750, function () {
                loopbox();
              });
          });
      });
  }
});

//Get the scroll-to-top button
var mybutton = document.getElementById("top-btn");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to the top of the document
function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}
