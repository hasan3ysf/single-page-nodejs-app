window.welcome = function(e, name) {
     console.log(name);
     console.log(e)
    var template = templater(TXT__TEMPLATE);
    var container = document.createElement('htmlelement');
    container.innerHTML = template({
         Title: name
    });
 e.appendChild(container);
}