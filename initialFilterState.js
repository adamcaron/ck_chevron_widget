$(document).ready(function () {
  applyInitialStyles();
});

function applyInitialStyles () {
  var $allChevrons      = $(".a"),
      $interested       = $("#interested"),
      $buildingProfile  = $("#building-profile"),
      $choosingPrograms = $("#choosing-programs"),
      $applying         = $("#applying"),
      $preDeparture     = $("#pre-departure"),
      $traveling        = $("#traveling"),
      $alumni           = $("#alumni");

  $allChevrons.css({
    "stroke": "purple",
    "fill": "transparent",
    "stroke-width": "3px"
  });

  $interested.css({ "stroke": "#9A2073" });
  $buildingProfile.css({ "stroke": "#FFA009" });
  $choosingPrograms.css({ "stroke": "#08AEB5" });
  $applying.css({ "stroke": "#831CCE" });
  $preDeparture.css({ "stroke": "#831CCE" });
  $traveling.css({ "stroke": "#F9D005" });
  $alumni.css({ "stroke": "" });
};