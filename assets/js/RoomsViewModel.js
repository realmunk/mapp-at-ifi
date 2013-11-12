(function (window, $) {
  window.MAPP = window.MAPP || {};
  window.MAPP.Model = window.MAPP.Model || {};
  var ns = window.MAPP,
    model = window.MAPP.Model;

  ns.RoomsViewModel = function () {
    var self = this;

    self.rooms = ko.observableArray();
    self.available = ko.observable(false);
    self.filter = ko.observable('All');
    

    self.type = ko.computed(function () {
      if (self.available()) {
        return "Show all rooms";
      } else {
        return "Show available rooms";
      }
    });    

    self.filterRooms = ko.computed(function () {
      var rooms = self.rooms(),
        filter = self.filter();
      
      if (self.available()) {
        rooms = _.filter(rooms, function (Room) {
          return parseInt(Room.state()) <= 50;
        });
      }

      if (filter === 'All') {
        return rooms;
      } else if (filter === '1st floor') {
        return _.filter(rooms, function (Room) {
          return Room.id[0] === '1';
        });
      } else if (filter === '2nd floor') {
        return _.filter(rooms, function (Room) {
          return Room.id[0] === '2';
        });
      } else if (filter === '3rd floor') {
        return _.filter(rooms, function (Room) {
          return Room.id[0] === '3';
        });
      }
    }).extend({ "throttle": "100" });

    self.toggleAvailable = function () {
      if (self.available()) {
        self.available(false)
      } else {
        self.available(true)
      }
    };

    function success(resp) {
      $.each(resp.rooms, function (index, room) {
        self.rooms.push(new model.Room(room.id, room.name, room.type, room.state));
      });

      setInterval(function () {
        $.each(self.rooms(), function (index, room) {
          room.setState(Math.round(Math.random() * 100, 2));
        });
      }, 10000);
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