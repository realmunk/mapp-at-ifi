(function (window, $) {

  window.mapp = window.mapp || {};
  var ns = window.mapp;

  ns.Application = function () {
    var self = this, 
    app = $.sammy('#application');

    app.get('#/', function () {
      this.load("views/menu.html", function (resp) {
        $("#application").html(resp);
      })
    });

    app.get('#/romoversikt', function () {
      this.load("views/romoversikt.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/kart', function () {
      this.load("views/kart.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/hvaSkjer', function () {
      this.load("views/hvaSkjer.html", function (resp) {
        $("#application").html(resp);
      });
    });

    app.get('#/praktiskInfo', function () {
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