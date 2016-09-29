'use strict';

function Gallery(options) {
    this.bigImg = options.bigImg;
    this.thumbs = options.thumbs;
    this.thumbs.onclick = this.onclick.bind(this);

    }

Gallery.prototype.onclick = function (event) {
    var target = event.target;

    if (target.closest('A')) {
        event.preventDefault();
        }

    if (target.tagName == 'IMG') {
        this.enlargeImageHandler(target);
        }
    };

Gallery.prototype.enlargeImageHandler = function(smallImg) {
    var source = smallImg.src;
    this.bigImg.src = source.slice(0, -10)+'.jpg';
    //img/landscape_01_thumb.jpg -> img/landscape_01.jpg
    };

var DOMgalleries = document.querySelectorAll('[id*=galleryModal]');

var galleries = [];
for (var i = 0; i < DOMgalleries.length; i++) {
    galleries[i] = new Gallery({
        bigImg: DOMgalleries[i].querySelector('.big-img'),
        thumbs: DOMgalleries[i].querySelector('.thumbs'),
    })
};
