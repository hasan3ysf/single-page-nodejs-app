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
          console.log(event.lastEventId + ' : '+event.data);
      });

      eventsource.onerror = function(event) {
        log('ERROR: ' + event.message);
      };
 })();

 var log = function(text) {
        console.log(text)
};

