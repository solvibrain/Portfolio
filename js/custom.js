(function ($) {

  "use strict";

    // COLOR MODE
    $('.color-mode').click(function(){
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
    	items: 1,
	    loop:true,
	    margin:10,
	    nav:true
	});

    // SMOOTHSCROLL
    $(function() {
      $('.nav-link, .custom-btn-link').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
        }, 1000);
        event.preventDefault();
      });
    });  

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);

// const quoteBtn = document.querySelector('.quote-btn');
// const quoteWindow = document.querySelector('.quote-window');

// quoteBtn.addEventListener('mouseenter', () => {
//   quoteWindow.classList.add('show');
// });

// quoteBtn.addEventListener('mouseleave', () => {
//   quoteWindow.classList.remove('show');
// });

// const quoteBtn = document.querySelector('.quote-btn');
// const quoteWindow = document.querySelector('.quote-window');

// quoteBtn.addEventListener('click', () => {
//   quoteWindow.classList.toggle('show');
// });

// window.addEventListener('click', (e) => {
//   if (!e.target.closest('.quote-btn') && !e.target.closest('.quote-window')) {
//     quoteWindow.classList.remove('show');
//   }
// });

const quoteBtn = document.querySelector('.quote-btn');
const quoteWindow = document.querySelector('.quote-window');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

quoteBtn.addEventListener('click', () => {
  quoteWindow.classList.add('show');
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  quoteWindow.classList.remove('show');
  overlay.classList.remove('show');
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === overlay) {
    quoteWindow.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = 'auto';
  }
});