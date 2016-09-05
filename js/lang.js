function swictLang(lang) {
    "use strict";

    var ruText = $('.lang-ru');
    var enText = $('.lang-en');

    if (lang == 'ru') {
        ruText.removeClass('hide');
        enText.addClass('hide');
    } else {
        ruText.addClass('hide');
        enText.removeClass('hide');
    }

}

$('.flag').click(function (event) {
    $('.flag').toggleClass('active');
    swictLang(event.target.dataset.lang);
});