'use strict';


    //    var search = searchbar.cloneNode(true)
    //    document.body.appendChild(search)

        var ML = itembar.cloneNode(true)
        document.body.appendChild(ML)

var _search = search.cloneNode(true)
document.body.appendChild(_search)

        var data={}

        console.log('loaded')
            var me = menuStartup.cloneNode(true)
            document.body.appendChild(me)
 
            welcome(me, 'Mr. Hasan')


        //createMenu()
        var user = me.querySelector('#usr');
        var pswd = me.querySelector('#pswd');
        var submit = me.querySelector('#submit');

        submit.addEventListener('click',function(){
            data.user = usr.value;
            data.pswd = pswd.value;

            console.log(data);

            fetch("http://localhost:8080/api/returnMe", {
                method: "POST",
                body: JSON.stringify(data)
            }).then(function(response) {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.indexOf("text/json") !== -1) {
                return response.json().then(function(json) {
                    var data = JSON.parse(json);
                    console.log(data);
                });
            } else {
                console.log("Oops, we haven't got JSON!");
            }
            });
        }); 


