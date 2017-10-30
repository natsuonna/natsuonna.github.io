$(function() {
  counter = 0;
  $(window).scroll(function() {
    var pos = $(this).scrollTop();
    $leaf = $('.leaf');
    var y = 5 * Math.sin( counter / 5 ) / 1 + 2;
    counter += 10;
    
    if (pos < $('body').height()) {
      $('.frame1').css('transform', 'translate(' + y * 15 + 'px,' + pos * 1.5+ 'px)');
      $('.frame2').css('transform', 'translate(' + y * 10 + 'px,' + pos * 1.3+ 'px)');
      $('.frame3').css('transform', 'translate(' + y * 5 + 'px,' + pos * 1.1+ 'px)');
      $('.frame4').css('transform', 'translate(' + y * 1 + 'px,' + pos * 1+ 'px)');
      $('iframe').css('transform', 'rotate(' + pos / 5 * 20 + 'deg)');
    }
  });
});
