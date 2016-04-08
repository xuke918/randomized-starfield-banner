var $banner = $('.banner');

var bannerWidth = $banner.outerWidth();
var bannerHeight = $banner.outerHeight();

var i = 0;
var Stars = 75;
var $newStar;

for (i = 0; i < Stars; i++) {
  $newStar = $('<div>');
  $newStar.addClass('star');
  $newStar.css({
    top: Math.random()*bannerHeight,
    left: Math.random()*bannerWidth,
    transform: 'rotate('+ Math.random()*360 + 'deg) scale(' + Math.random() + ')',
    opacity: Math.random()
  });
  $banner.append($Stars);
}
