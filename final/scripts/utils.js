////////// DROPDOWN MENU
$('.topnav__right-hamburger').click(function(){
    $('.topnav__dropdown-menu-container').slideToggle(400);
});

$(window).resize(function(){

  if($(window).width() > 950 && $('.topnav__dropdown-menu-container').css('display') == 'block') {
    $('.topnav__dropdown-menu-container').slideUp(200);
  }
})

  
///////// SCROLL TO TOP
$(window).scroll(function() {
  if($(window).scrollTop() > 800) {
    $('.back-to-top').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
  }
});

$('.back-to-top').on('click', function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 800);
});


////////// HOME MENU CONTAINER RESIZE
setGalleryMenuHeight();
$(window).resize(setGalleryMenuHeight);

function setGalleryMenuHeight() {
  let topnavHeight = $('.header-wrapper').height();
  $('.container__bottom').css('padding-top', `${topnavHeight}px`);

  scrollBottomOnResize();
}

function scrollBottomOnResize() {
  if($(window).scrollTop() >= ($(document).height()/2) && $(window).width() > 768) {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 0);
  }
}