'use strict';
 (function(){
      var eventsource = new EventSource('http://localhost:8080/getinv');

      eventsource.onopen = function() {
        log('OPEN');
      };

      eventsource.onmessage = function(event) {
        log(event.data+' @: ' + event.lastEventId);           
      };

      eventsource.addEventListener('name', function(event) {
              var data = JSON.parse(event.data);
              for(var i=0; i<data.length; i++) console.log(`Item Code: ${data[i].ItemCode}, Item Name: ${data[i].ItemName}` );
      });

      eventsource.onerror = function(event) {
        log('ERROR: ' + event.message);
      };
 })();

 var log = function(text) {
        console.log(text)
};

