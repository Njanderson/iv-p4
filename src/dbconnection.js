"use strict";

import mysql from 'mysql';

export default class DBConnection{
	
	constructor(config){
		this.connection = mysql.createConnection(config);
		this.connection.connect();
	}

	disconnect(){
		this.connection.end();
	}

	query(query, callback){
		this.connection.query(query, (err, rows, fields) => {
			if(err){
				console.log(err);
			}else{
				callback(rows);
			}
		});
	}

}