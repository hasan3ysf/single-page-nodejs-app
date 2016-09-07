function loadScript(directory, files){
  var head = document.getElementsByTagName("head")[0]
  var done = false
  var extension = '.js'
  for (var file of files){ 
       var path = directory + file + extension 
       var script = document.createElement("script")
       script.src = path        
       script.type = "text/javascript"
       script.onload = script.onreadystatechange = function() {
            if ( !done && (!this.readyState ||
                this.readyState == "loaded" || this.readyState == "complete") ) {
                done = true
                script.onload = script.onreadystatechange = null   // cleans up a little memory:
                head.removeChild(script)  // to avoid douple loading
            }
      };
      head.appendChild(script) 
      done = false
   }
}

function loadStyle(directory, files){
  var head = document.getElementsByTagName("head")[0]
  var extension = '.css'
  for (var file of files){ 
       var path = directory + file + extension 
       var link = document.createElement("link")
       link.href = path        
       link.type = "text/css"
       link.rel = "stylesheet" 
       head.appendChild(link) 
   }
}

function templater(html) { 
  return function(data){
  for(var x in data){
    var re = "{{\\s?" + x + "\\s?}}";
    html = html.replace(new RegExp(re, "ig"), data[x]);
    }
  return html;
 };
}



window.onload = function() {
    (() => loadScript('views/', ['start'])) ();
    (() => loadScript('templates/', ['start'])) ();
    (() => loadScript('templaters/', ['start'])) ();
     (() => loadScript('libraries/pre-load/', ['listen','functions', 'speak', 'commands'])) ();
    (() => loadScript('scripts/', ['index'])) ();
    (() => loadScript('libraries/post-load/', ['websocketBrowser', 'eventsourceBrowser','main'])) ();


    (() => loadStyle('styles/', ['index'])) ();
};