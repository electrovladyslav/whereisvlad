(function () {
    "use strict";

    /**
    * Компонент Галерея
    *
    * @constructor
    * @this {Gallery}
    * @param {object} options Объект начальных параметров
    */
    function Gallery(options) {

        this.container = options.container;

        this.bigImg = this.container.querySelector('.big-img');
        this.thumbs = this.container.querySelectorAll('.img-thumbnail');
        this.chosenThumb = this.container.querySelector('.chosen');

        this.container.onclick = this.onclick.bind(this);
    }

    /**
    * Метод обработки события клик
    *
    * @param {event} event Сбъект события
    */
    Gallery.prototype.onclick = function (event) {
        var target = event.target;

        if (target.closest('A')) {
            event.preventDefault();
        }

        if (target.classList.contains('img-thumbnail')) {
            this.enlargeImageHandler(target);
        }

        if (target.classList.contains('gallery-control')) {
            this.btnHandler(target);
        }
    };

    /**
    * Метод обработки события клик на кнопке влево/вправо
    *
    * @param {node} arrowBtn Элемент кнопки, которая была нажата
    */
    Gallery.prototype.btnHandler = function (arrowBtn) {
        var next;

        if (arrowBtn.classList.contains('right')) {
            next = this.chosenThumb.nextElementSibling || this.thumbs[0];
        }

        if (arrowBtn.classList.contains('left')) {
            next = this.chosenThumb.previousElementSibling
                    || this.thumbs[this.thumbs.length - 1];
        }

        this.enlargeImageHandler(next);
    };

    /**
    * Метод отображения большой картинки
    *
    * @param {node} smallImg Элемент изображения превьюшки
    */
    Gallery.prototype.enlargeImageHandler = function (smallImg) {
        var source = smallImg.src;
        this.bigImg.src = source.slice(0, -10) + '.jpg';
        //img/landscape_01_thumb.jpg -> img/landscape_01.jpg

        smallImg.classList.add('chosen');
        this.chosenThumb.classList.remove('chosen');
        this.chosenThumb = smallImg;
    };


    //Инициализация
    var DOMgalleries = document.querySelectorAll('[id*=galleryModal]');

    var galleries = [];
    var i;
    for (i = 0; i < DOMgalleries.length; i += 1) {
        galleries[i] = new Gallery({
            container: DOMgalleries[i]
        });
    }
}());
