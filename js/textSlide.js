// To create fade in/fade out elements
function textSlide() {
    let startFade = () => {
        setTimeout(function () {
            $('#one').fadeOut(500, function () {
                $('#two').fadeIn(1500, function () {
                    setTimeout(function () {
                        $('#two').fadeOut(500, function () {
                            $('#three').fadeIn(1500, function () {
                                setTimeout(function () {
                                    $('#three').fadeOut(500, function () {
                                        $('#one').fadeIn(1500, startFade());
                                    });
                                }, 5000);
                            });
                        });
                    }, 5000);
                });
            });
        }, 5000);
    };
    startFade();
}
