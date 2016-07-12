$(document).ready(function() {
    $('.search-toggle').on('click', toggleSearchBox);
    $('.search input').on('keyup', toggleSearchBtn);
    $('.nav-top .btn-menu-toggle').on('click', toggleTopMenu);
    $(window).on("resize", showTopMenu);

    $('.col-container nav a').on('click', function() {
        $('.col-container nav a').removeClass('active');
        $(this).addClass('active');
        loadHtml($(this).attr('data-link'));
        return false;
    });
    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);
});

function loadHtml(link) {
    $('.col-container .right').load(link);
}

function toggleSearchBox() {
    $('.search').slideToggle(300);
    $('.search input').focus();
}

function hideSearchBox() {
    $('.search').slideUp(300);
}

function toggleSearchBtn() {
    if ($('.search input').val().length == 0) {
        $('.search button').removeClass('enabled');
    } else if ($('.search input').val().length > 0) {
        $('.search button').addClass('enabled');
    }
}

function toggleTopMenu() {
    $('.nav-top ul').slideToggle(300);
    toggleSearchBox();
}

function showTopMenu() {
    if (window.innerWidth >= 768) {
        $('.nav-top ul.main-menu-mobile').hide();
        $('.nav-top ul:last-child').show();
    } else {
        $('.nav-top ul').show();
        $('.search').show();
    }
}