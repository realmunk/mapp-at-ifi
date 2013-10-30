(function (window, $) {

  $(document).ready(function () {
    var app = new window.mapp.Application();
    ko.applyBindings(app, $("#navbar").get(0));
  });

}(window, jQuery));