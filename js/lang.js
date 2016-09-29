$(document).ready(function () {
    "use strict";
    var langStored = localStorage.getItem('lang');

    $('.flag').click(function (event) {
        swictLang(event.target.dataset.lang);
    });

    if (langStored === 'en') {
        swictLang('en');
    };

    function swictLang(lang) {

        var ruText = $('.lang-ru');
        var enText = $('.lang-en');

        switch (lang) {
        case 'en':
            enText.removeClass('hide');
            ruText.addClass('hide');

            $('.flag-en').addClass('active');
            $('.flag-ru').removeClass('active');

            localStorage.setItem('lang', 'en');
            break;

        // case 'ru':
        default:
            ruText.removeClass('hide');
            enText.addClass('hide');

            $('.flag-ru').addClass('active');
            $('.flag-en').removeClass('active');

            localStorage.setItem('lang', 'ru');
        }
    }
});
