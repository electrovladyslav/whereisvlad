$(document).ready(function () {
    "use strict";
    var langStored = localStorage.getItem('lang');

    if (langStored === 'en') {
        swictLang('en');
    };

    $('.flag').click(function (event) {
        swictLang(event.target.dataset.lang);
    });
    /**
    * Переключает язык страницы, показывает текст на одном языке, и скрывает
    *   текст на другом
    *
    * @param {string} lang строка с языком, на который надо переключить
    * @return {void}  ???
    */
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
