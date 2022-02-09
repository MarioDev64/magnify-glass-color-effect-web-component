const magnificationRatio = 2.04;

// set loupe dimensions
$(".magnify").height($(".magnify").width());

// resize event to responsive
$(window).resize(function () {
  magnifyCalc($(".magnify").offset());
  $(".magnify").height($(".magnify").width());
});

function magnifyCalc(pos) {
  const ratio = 0.08;

  //calculate horizontal render
  let leftImageOffset = $(".image").offset().left;
  let elementWidth = $(".image").width();
  let leftPos =
    (pos.left - leftImageOffset + elementWidth * ratio) *
    (0 - magnificationRatio);

  //calculate vertical render
  let topImageOffset = $(".image").offset().left;
  let elementHeight = $(".image").height();
  let topPos =
    (pos.top - topImageOffset + elementHeight * ratio) *
    (0 - magnificationRatio);

  // set background position
  let bgp = leftPos + "px " + topPos + "px";

  $(".magnify").css({
    backgroundPosition: bgp,
    backgroundSize:
      $(".image").width() * magnificationRatio +
      "px " +
      $(".image").height() * magnificationRatio +
      "px",
  });
}

$(window).on("load", function () {
  $(".magnify").draggable({
    containment: $(".wrapper"),
    drag: (ev, ui) => {
      magnifyCalc(ui.offset);
    },
  });
});
