(function (window, $) {

  window.MAPP = window.MAPP || {};
  window.MAPP.Model = window.MAPP.Model || {};
  var ns = window.MAPP,
    model = window.MAPP.Model;

  ns.RoomsViewModel = function () {
    var self = this;

    self.rooms = ko.observableArray();


    function success(resp) {
      $.each(resp.rooms, function (index, room) {
        self.rooms.push(new model.Room(room.id, room.name, room.type, room.state));
      });
    }

    function error(resp) {
      console.log("ERROR:" + resp);
    }

    (function() {
      $.getJSON('assets/testdata/data.json', success)
        .fail(error);
    }());
  };

}(window, jQuery));