$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#dog").prepend("<li>Bark! Bark! (Hello!)</li>");
    $("ul#cat").prepend("<li>Meow! Meow! (Why hello there!)</li>");
  });


  $("button#stop").click(function() {
    $("ul#dog").append("<li>Pardon me. I meant no offense.</li>");
    $("ul#cat").append("<li>Stop chasing me!</li>");
  });

$("button#image").click(function() {
  $("ul#dog").append("<img src=img/dog.jpg>");
  $("ul#cat").append("<img src=img/cat.jpg>");
});

});
