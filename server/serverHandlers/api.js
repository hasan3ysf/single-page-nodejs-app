exports.handleReq = function (req, res, path) {
        var store = '',
            buffer = {},
            api    = path.substr(5)   // remove the /api/ from the path: /api/login => login
            req.on('data', ((data) => store += data))
            req.on('end', function() 
                  {  
                       buffer = JSON.stringify(store)
                       console.log()
                       switch(api){
                           case 'returnMe': returnSame(buffer, res); break
                           default: break
                       }
                   })
}

var returnSame = ((buffer, res) => apiJSON(buffer, res))

var apiJSON = function(info, res){
                 res.setHeader("Content-Type", "text/json")
                 res.setHeader("Access-Control-Allow-Origin", "*")
                 res.end(info)
}
