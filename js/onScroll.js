$("document").ready(function($){
    var nav = $('#anchor-article');
    var fix = $('#ancrearticle');
    var nav2 = $('#anchor-interview');
    var nav3 = $('#anchor-contact');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 970 && $(this).scrollTop() < 2800) {
            nav.addClass("fixed");
        }
        else {
          if ($(this).scrollTop() >= 3030) {
              nav2.addClass("fixed");
          }
          else {
            if ($(this).scrollTop() < 3030) {
              nav2.removeClass("fixed");
            }
          }
          if ($(this).scrollTop() >= 5030) {
            nav3.addClass("fixed");
          }
          else {
            if($(this).scrollTop() <= 970){
              nav.removeClass("fixed");
            }
          }
          if($(this).scrollTop() < 5030){
            nav3.removeClass("fixed");
          }
      }
    });
});
