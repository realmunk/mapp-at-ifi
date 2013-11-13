(function (window, $) {
	window.MAPP = window.MAPP || {};
 	window.MAPP.Model = window.MAPP.Model || {};
 	var ns = window.MAPP,
 		model = window.MAPP.Model;

 	ns.EventsViewModel = function () {
 		var self = this;

 		self.events = ko.observableArray();
    self.filter = ko.observable('Today');


    self.filterEvents = ko.computed(function(){
      var events = self.events();
      filter = self.filter();

      // Current date
          var today = new Date();
          var dayOfWeek = today.getDay();
          var dateOfMonth = today.getDate();
          var month = today.getMonth() + 1;
          var year = today.getFullYear();
          var thisDayString = dateOfMonth.toString()
          + "." + month.toString() + "." + year.toString();

      if(filter === 'All events'){
        return events;
      }else if(filter === 'Today'){
        return _.filter(events, function (Event) {
          return Event.date === thisDayString;
        });
      }else if(filter === 'Rest of week'){
        return _.filter(events, function (Event) {

          var eventDay = Event.date.substring(0,2);
          
          var correctD = Event.date === thisDayString;
          var correctM = Event.date[3] === month.toString()[0] && Event.date[4] === month.toString()[1];
          var endDay = dateOfMonth + (7 - dayOfWeek);
          var correctW = (Number(eventDay) <= endDay);
          return !correctD && correctM && correctW;
        });
      }else if(filter === 'Rest of month'){
        return _.filter(events, function (Event) {
          var eventDay = Event.date.substring(0,2);
          
          var correctM = Event.date[3] === month.toString()[0] && Event.date[4] === month.toString()[1];
          var endDay = dateOfMonth + (7 - dayOfWeek);
          var correctW = (Number(eventDay) <= endDay);
          return correctM && !correctW;
        });
      }
    });

    function success(resp) {
      $.each(resp.events, function (index, event) {
        self.events.push(new model.Event(event.date, event.time, event.desc, event.where));
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
}(window, jQuery));