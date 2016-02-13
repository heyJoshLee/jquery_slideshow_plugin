(function($) {
  $.fn.slideshow = function () {
    var $slideshow = this,
        $nav = this.next("ul");

        $(document).on("click", function(e) {
          console.log(e.target);
        });

    $nav.on("click", "a", function(e) {
      e.preventDefault();
      var $li = $(this).closest("li"),
          idx = $li.index();

      $slideshow.find("figure").stop().filter(":visible").fadeOut(300);
      $slideshow.find("figure").eq(idx).delay(300).fadeIn(300);

      $nav.find(".active").removeClass("active");
      $li.addClass("active");
    });
  }

})(jQuery);
