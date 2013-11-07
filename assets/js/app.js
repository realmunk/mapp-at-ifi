(function (window, $) {
  "use strict";

  window.MAPP = window.MAPP || {};
  var ns = window.MAPP;

  ns.Application = function (viewmodels) {
    var self = this,
      app = $.sammy('#application'),
      viewmodel = viewmodels; // sammy is a routing tool

    self.breadcrumb = ko.observable("");

    app.get('#/', function () {
      self.breadcrumb("");
      this.load("views/menu.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/rom-oversikt', function () {
      self.breadcrumb("/ Romoversikt");
      this.load("views/romoversikt.html", function (resp) {
        $("#application").html(resp);
        ko.applyBindings(viewmodel.rooms, $("#romoversikt").get(0));
      });
    });

    app.get('#/kart', function () {
      self.breadcrumb("/ Kart");
      this.load("views/kart.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/hva-skjer', function () {
      self.breadcrumb("/ Hva skjer?");
      this.load("views/hvaSkjer.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/praktisk-info', function () {
      self.breadcrumb("/ Praktisk informasjon");
      this.load("views/praktiskInfo.html", function (resp) {
        $("#application").html(resp);
      });
    });

    (function () {
      app.run("#/");
    }());
  };
}(window, jQuery));