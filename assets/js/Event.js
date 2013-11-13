(function () {

  window.MAPP = window.MAPP || {};
  window.MAPP.Model = window.MAPP.Model || {};
  var ns = window.MAPP.Model;

  ns.Event = function (date, time, desc, where) {
    this.date = date;
    this.time = time;
    this.desc = desc;
    this.where = where;
  };

}(window));