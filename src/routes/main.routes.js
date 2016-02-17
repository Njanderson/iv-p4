"use strict";
// Import node module
import express from 'express';
import mysql from 'mysql';

var connection = mysql.createConnection({
  host     : 'infovis16kth.cshnbc8ndr6r.us-east-1.rds.amazonaws.com',
  port 	   : 3306,
  database : 'winddata',
  user     : 'infovis16user',
  password : 'infovis16pass'
});

const router = express.Router();

//Get data points corresponding to time
router.get('/getTurbineData/:year/:month/:day/:hour', (req, res) => {
	let date = req.params.year + "-" + req.params.month + "-" + req.params.day;
	let hour = req.params.hour+':00:00';
	if(req.params.hour < 10){
		hour = '0'+hour;
	}
	var query = 'select * from WindData where date=\''+date+'\''+'and ' + 'endTime='+'\''+hour+'\'';
	console.log(query);
	connection.query(query, (err, rows, fields) => {
		console.log(rows[0]);
		res.send(rows);
	});

});


// Arrow functions
router.get('/', (req, res) => {



	// res.send({message: '	'});
});
// Exporting an object as the default import for this module
export default router;
