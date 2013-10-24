(function (window, $) {

  window.mapp = window.mapp || {};
  var ns = window.mapp;

  ns.Application = function () {

    //constructor
    (function () {
      console.log("Hello");
      var links = $("#main-menu a");

      $.each(links, function (index, link) {
        $(link).click(function () {
          var href = $(this).attr("href");
          $.get(href, function (resp) {
            $(body).html(resp);
          });
        });

        $(link).attr("href", "javascript:void(0);");
      });
    }())
  }

}(window, jQuery));