(function (window, $) {
	window.MAPP = window.MAPP || {};
 	window.MAPP.Model = window.MAPP.Model || {};
 	var ns = window.MAPP,
 		model = window.MAPP.Model;

 	ns.EventsViewModel = function () {
 		var self = this;

 		self.events = ko.observableArray();

    function success(resp) {
      $.each(resp.events, function (index, event) {
        self.events.push(new model.Event(event.date, event.desc, event.where));
      });
    }

    function error(resp) {
      console.log("ERROR:" + resp);
    }

    (function() {
      $.getJSON('assets/testdata/eventData.json', success)
        .fail(error);
    }());
  };
});