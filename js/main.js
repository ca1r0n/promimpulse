"use strict";

//burger
//--------------------------------------------------------------------
var burger = document.querySelector('.burger');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
}); //SLIDER
//--------------------------------------------------------------------

var Width = document.documentElement.clientWidth;

if (Width <= 992) {
  var btnNext = document.querySelector('.slider__arrow--right');
  var btnPrev = document.querySelector('.slider__arrow--left');
  var Slider = document.querySelector('.slider');
  var SliderContent = document.querySelector('.intro__list');
  var SliderElem = SliderContent.childElementCount; // Нужно менять

  var ActiveElem = 1;
  var FlexGap = 10;
  var Sdvig = (Width - FlexGap * (SliderElem - 1)) / ActiveElem;
  var NumSlide = 0;

  btnNext.onclick = function () {
    if (NumSlide + ActiveElem - 1 < SliderElem - 1) {
      ++NumSlide;
      SliderContent.setAttribute('style', "right: ".concat(Math.round(Sdvig * NumSlide) + FlexGap * NumSlide, "px"));
    }
  };

  btnPrev.onclick = function () {
    if (NumSlide - 1 >= 0) {
      --NumSlide;
      SliderContent.setAttribute('style', "right: ".concat(Math.round(Sdvig * NumSlide) + FlexGap * NumSlide, "px"));
    }
  };
} //MAP
//--------------------------------------------------------------------


var quantityPoints = 17;

var _loop = function _loop(i) {
  var elem = document.querySelector('#point' + i);
  var partMap = document.querySelector('#map' + i);
  elem.addEventListener('mouseenter', function (event) {
    partMap.classList.add('our-objects__items--active');
  });
  elem.addEventListener('mouseleave', function (event) {
    partMap.classList.remove('our-objects__items--active');
  });
};

for (var i = 1; i <= 17; ++i) {
  _loop(i);
} //slider
//--------------------------------------------------------------------


var images = ['../img/slide1.png', '../img/slide1.png', '../img/slide1.png'];
var leftBtn = document.querySelector('.about-us__arrow--left');
var rightBtn = document.querySelector('.about-us__arrow--right');
var selector = document.querySelector('.about-us');
var activeSlide = 0;
leftBtn.addEventListener('click', function (event) {
  if (activeSlide - 1 == -1) {
    activeSlide = images.length;
  }

  activeSlide -= 1;
  selector.style.background = "url(".concat(images[activeSlide], ")");
  selector.style.backgroundRepeat = "no-repeat";
  selector.style.backgroundSize = "cover";
  selector.style.backgroundPosition = "0 0";
});
rightBtn.addEventListener('click', function (event) {
  if (activeSlide + 1 == images.length) {
    activeSlide = -1;
  }

  activeSlide += 1;
  selector.style.background = "url(".concat(images[activeSlide], ")");
  selector.style.backgroundRepeat = "no-repeat";
  selector.style.backgroundSize = "cover";
  selector.style.backgroundPosition = "0 0";
}); //FOOTER
//--------------------------------------------------------------------

var items = document.querySelectorAll('.footer__top-block');
items.forEach(function (item) {
  item.addEventListener('click', function (event) {
    item.parentNode.classList.toggle('footer__top-items--active');
  });
});
//# sourceMappingURL=main.js.map
