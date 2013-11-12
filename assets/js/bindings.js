(function () {
  "use strict";
  ko.bindingHandlers.toggleTrigger = {
    init: function (element, valueAccessor) {
      var value = valueAccessor(),
        $element = $(element),
        text = $element.text();
      
      $element.click(function () {
        value(text);
      });
    }
  };

}());