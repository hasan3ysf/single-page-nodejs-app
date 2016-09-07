var sql = require("./sql.js");

var addElem = (obj, elem)=> [].push.call(obj, elem)
var result = {}

module.exports = {
	data: function(es){
       		  var dloop = setInterval(function() {
		        if (es) {
							if(result.error !== null)
		               es.send(JSON.stringify(result.data), {event: 'name', id: (new Date()).toLocaleTimeString()});
		          else es.send('connection ios closed');
						}
	      }, 1000);
	},
	start: function () {
		     sql.query("SELECT ItemCode, ItemName FROM OITM where itemcode like 'RM%';",{ type: sql.QueryTypes.SELECT }
                 ).then(function(rows){
									 result.data = {};
    			         rows.forEach(((row) => addElem(result.data, row)))		//	 addElem(result.data,{'Item': row.ItemCode, 'Name': row.ItemName});	
									})
								.catch(function (err) {
												result.error = {'error': err};
												console.log((new Date()).toLocaleTimeString()+' err : '+err);
								});
  }
}