$("document").ready(function($){
  $(function() {
    $('.menu').click(function() {
    	$('.test' ).fadeTo( "slow", 1 );
      $('.interview').fadeTo( "slow", 1 );
      $('.articles').fadeTo( "slow", 1 );
    });
    $('.menu-article').click(function() {
      $('.test' ).fadeTo( "slow", 0.1 );
      $('.interview').fadeTo( "slow", 0.1 );
      $('.articles').fadeTo( "slow", 1 );
    });
    $('.menu-interview').click(function() {
      $('.test' ).fadeTo( "slow", 0.1 );
      $('.interview').fadeTo( "slow", 1 );
      $('.articles').fadeTo( "slow", 0.1 );
    });
    $('.menu-test').click(function() {
      $('.test' ).fadeTo( "slow", 1 );
      $('.interview').fadeTo( "slow", 0.1 );
      $('.articles').fadeTo( "slow", 0.1 );
    });
  });
});
