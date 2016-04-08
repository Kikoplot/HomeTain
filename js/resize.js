$(document).ready(function() {
  // $(window).resize() est appelée chaque fois que la fenêtre est redimensionnée par l'utilisateur.
  $(window).resize(function() {
    $("#monbloc").css({
      position:'absolute',
      left:($(window).width() - $("#monbloc").outerWidth()) / 2,
      top:($(window).height() - $("#monbloc").outerHeight()) / 2
    });
    $("#info1").css({
      left:($(window).width() - $("#info1").outerWidth()) / 100,
      top:($(window).height() - $("#info1").outerHeight()) / 1.85
    });
    $("#info2").css({
      left:($(window).width() - $("#info2").outerWidth()) / 2.5,
      top:($(window).height() - $("#info2").outerHeight()) / 1.55
    });
    $("#info3").css({
      left:($(window).width() - $("#info3").outerWidth()) / 1.2,
      top:($(window).height() - $("#info3").outerHeight()) / 4
    });
    $(".mouse_scroll").css({
      left:($(window).width() - $("#info3").outerWidth()) / 2.1,
      top:($(window).height() - $("#info3").outerHeight()) / 1.2
    });
    $("#menu").css({
      top:($(window).height() - $("#info3").outerHeight()) / 2.1
    });
  });
});

$(window).load(function() {
  // au chargement complet de la page, la fonction resize() est appelée une fois pour initialiser le centrage.
  $(window).resize();
});
