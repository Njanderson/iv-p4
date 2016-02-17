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

// Arrow functions
router.get('/', (req, res) => {
	connection.connect();
	connection.query('CREATE TABLE test (foo integer, bar integer);', (err, rows, fields) => {
			console.log(err);

		});


	// res.send({message: '	'});
});
// Exporting an object as the default import for this module
export default router;
