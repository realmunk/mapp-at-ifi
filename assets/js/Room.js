(function () {

  window.MAPP = window.MAPP || {};
  window.MAPP.Model = window.MAPP.Model || {};
  var ns = window.MAPP.Model;

  ns.Room = function (id, name, type, state) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.state = ko.observable(state);
  };

  // put shit here
  ns.Room.prototype.getState = function () {
    return this.state();
  };

  ns.Room.prototype.setState = function (state) {
    this.state(state);
  };

}(window));