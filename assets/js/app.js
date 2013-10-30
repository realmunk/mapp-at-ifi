(function (window, $) {

  window.mapp = window.mapp || {};
  var ns = window.mapp;

  ns.Application = function () {
    var self = this,
    app = $.sammy('#application'); // sammy is a routing tool
    
    self.breadcrumb = ko.observable("");

    app.get('#/', function () {
      self.breadcrumb("");
      this.load("views/menu.html", function (resp) {
        $("#application").html(resp);
      })
    });

    app.get('#/romoversikt', function () {
      self.breadcrumb("/ Romoversikt");
      this.load("views/romoversikt.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/kart', function () {
      self.breadcrumb("/ Kart");
      this.load("views/kart.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/hvaSkjer', function () {
      self.breadcrumb("/ Hva skjer?");
      this.load("views/hvaSkjer.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/praktiskInfo', function () {
      self.breadcrumb("/ Praktisk informasjon");
      this.load("views/praktiskInfo.html", function (resp) {
        $("#application").html(resp);
      });
    });
    
    //constructor
    (function () {
      app.run("#/");
    }())
  }

}(window, jQuery));