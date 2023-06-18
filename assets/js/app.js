window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("on-scroll-progress").style.width = scrolled + "%";
}

var countDownDate = new Date("August 6, 2023 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = '<div class="count"> <strong>' + days + ' </strong><span>Days</span></div> <div class="count"> <strong>' + hours + ' </strong><span> Hours</span></div> <div class="count"> <strong> '
  + minutes + ' </strong><span>Minutes </span></div> <div class="count"> <strong> ' + seconds + ' </strong><span>Seconds</span></div>';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

$(document).ready(function() {
  setTimeout(function() {
    $('.loading-content').hide();
    $('.content').removeClass('content-hidden');
  }, 15000);

  $(document).on('scroll', function() {
    const nowScrollTop = $(this).scrollTop();

    if (nowScrollTop > 700){
      $('.header-content .navbar').addClass('full');
    } else {
      $('.header-content .navbar').removeClass('full');
    }
  });

  $('.scroll-to').on('click', function(e) {
    e.preventDefault();
    const body = $('body');
    const target = $($(this).attr('href'));
    var position = target.offset().top - body.offset().top + body.scrollTop() - 100;

    $('#bdNavbar').offcanvas('hide')
    $('body, html').animate({ scrollTop: position });

    return false;
  });
});