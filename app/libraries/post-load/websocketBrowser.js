 (function WebSocketTest()
         {
            if ("WebSocket" in window)
            {
               console.log("WebSocket is supported by your Browser!");
             //  document.getElementById("ML").innerHTML = "";
               ML.innerHTML = "";
               // Let us open a web socket
               var ws = new WebSocket("ws://localhost:8080/");
				
               ws.onopen = function()
               {
                  // Web Socket is connected, send data using send()
                  ws.send("WebSocket is opened");
                  console.log("Message is sent...");
               };
				
               ws.onmessage = function (event) 
               { 
                 // var received_msg = evt.data;
                 // alert("Message is received..."+received_msg);
                 //console.log("Message is received..."+received_msg);
                 ML.innerHTML = event.data;
             //    var input = JSON.parse(event.data);
             //    document.getElementById("ML").innerHTML = 'ML SoH: '+input[0].OnHand;
                 
               };
				
               ws.onclose = function()
               { 
                  // websocket is closed.
                  console.log("Connection is closed..."); 
               };
            }
            
            else
            {
               // The browser doesn't support WebSocket
               alert("WebSocket NOT supported by your Browser!");
            }
         })();