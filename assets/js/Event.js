(function () {

  window.MAPP = window.MAPP || {};
  window.MAPP.Model = window.MAPP.Model || {};
  var ns = window.MAPP.Model;

  ns.Event = function (date, time, desc, where) {
    this.date = date;
    this.time = time;
    this.desc = desc;
    this.where = where;
    this.belonging = function(){
    	var eventDate = this.date;

    	//Current date
    	var today = new Date();
    	var dayOfWeek = today.getDay();
    	var dateOfMonth = today.getDate();
    	var month = today.getMonth() + 1;
    	var year = today.getFullYear();
    	// Event date
    	var eventDay = eventDate.substring(0,2);
    	var eventMonth = eventDate.substring(3,5);
    	var eventYear = eventDate.substring(6,8);

    	var rightMonth = (month.toString() === eventMonth);
    	//console.log(rightMonth);
    	if(rightMonth){
    		if(eventDay === dateOfMonth.toString()){
 
    			var compute = dateOfMonth + (7 - dayOfWeek);
    			if(Number(eventDay) <= compute){
    				return 'Week';
    			}
    			return 'Today';
    		}
    		return "Month";

    	}
    	return "All";
    };
    this.xxx = ko.observable(this.belonging());

  };

  ns.Event.prototype.getDate = function (arg){
  	var dato = this.date;

  	switch(arg){
  		case "day":
  			return dato.substring(0,2);
  			break;
  		case "month":
  			return dato.substring(3,5);
  			break;
  		case "year":
  			return dato.substring(6,8);
  			break;
  		default:
  			return dato;
  			break;
  	}
  };

  ns.Event.prototype.getBelonging = function (){
  	return this.belonging();
  };

}(window));