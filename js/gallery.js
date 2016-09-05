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
    // var container = this.bigImg.parentNode;
    // var cloneSmallImg = smallImg.cloneNode();

    //this.bigImg.classList.toggle('bigImg');
    //smallImg.parentNode.appendChild(this.bigImg);
    //container.removeChild(this.bigImg);

    // cloneSmallImg.classList.toggle('big-img');
    // container.appendChild(cloneSmallImg);

    // this.bigImg = cloneSmallImg;
    };

var DOMgalleries = document.querySelectorAll('[id*=galleryModal]');
var gallery = [];
for (var i = 0; i < DOMgalleries.length; i++) {
    gallery[i] = new Gallery({
        bigImg: DOMgalleries[i].querySelector('.big-img'),
        thumbs: DOMgalleries[i].querySelector('.thumbs'),
    })
};
/*var gallery = new Gallery({
    bigImg: document.querySelector('#galleryModal_01 .big-img'),
    thumbs: document.querySelector('#galleryModal_01 .thumbs')
});
*/