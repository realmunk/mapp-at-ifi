(function (window, $) {
  $(document).ready(function () {
    var viewModels = {
      "rooms": new window.MAPP.RoomsViewModel() 
      },
      app = new window.MAPP.Application(viewModels);
    ko.applyBindings(app, $("#navbar").get(0));
  });
}(window, jQuery));