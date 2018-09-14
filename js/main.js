// A Testimonials slider for a 
// friend's (fb.com/computer.doctor.xanthi/) 
// website i am developing

// Made with awesome -> Owl Carousel 2:
// https://github.com/OwlCarousel2/OwlCarousel2

$(function() {
  $('.owl-carousel.testimonial-carousel').owlCarousel({
    nav: true,
    navigation : true,
    navText: [
        '<img class="custom-arrow-left" src="assets/img/seta=equipe.png" alt="seta-esquerda">', 
        '<img class="custom-arrow-right" src="assets/img/seta=equipe.png" alt="seta-esquerda">'],
    dots: false,
    responsive: {

      750: {
        items: 2,
      },
      1000: {
        items: 4
      },
      1300: {
        items: 5
      }
    }
  });
});


// SLOW SCROLL

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// MENU BURGUER BULMA
  document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

// MODAL SUPORT BULMA

$(".showModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});
$(".modal-background").click(function() {
   $(".modal").removeClass("is-active");
});