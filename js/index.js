$(function() {
  $(".draggable").draggable();
  $("#dropzone").droppable({
    drop: function(event, ui) {
      const URL = ui.draggable.find("a").attr("href");
      const time = 850;
      $(this).addClass("drop-success")
      $(this).find( "p" ).html("Navigating to :" + URL + " in " + time + "ms");
      navigate(URL, time)
    }
  });
  $(".draggable").hover(function() {
    $(this).find("div.hover-content").fadeIn();
  }, function() {
    $(this).find("div.hover-content").fadeOut();
  });

  function navigate(URL, time) {
    setTimeout( function() { window.location.href = URL }, time );
  }
});
