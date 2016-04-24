"use strict";

import mysql from 'mysql';

export default class DBConnection{
	
	constructor(config){
		this.connection = mysql.createConnection(config);
		// this.connection.connect();
	}

	disconnect(){
		this.connection.end();
	}

	addMaintenanceLog(message, status, turbineId, date, callback){
		let query = 'insert into MaintenanceLog (message, turbineStatus, turbineId, date) values (\''+message+"\', \'"+status+"\', "+turbineId+", \'"+date+'\')';
		console.log(query);
		this.connection.query(query, (err, rows, fields) => {
			if(err){
				console.log(err);
				callback(err);
			}else{
				callback("success");
			}
		});
	}

	removeMaintenanceLog(logId, callback){
		let query = 'delete from MaintenanceLog where logId='+logId;
		this.query(query, callback);
	}

	query(query, callback){
		this.connection.connect()
		this.connection.query(query, (err, rows, fields) => {
			if(err){
				console.log(err);
			}else{
				callback(rows);
			}
		});
		this.connection.end()
	}

}