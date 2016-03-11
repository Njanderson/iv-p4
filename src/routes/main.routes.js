"use strict";
// Import node module
import express from 'express';
import DBConnection from '../dbconnection.js';
import {cfg} from '../db.cfg';
import {apiCfg} from '../46elk.cfg';
import SMSHandler from '../smshandler.js';

const db = new DBConnection(cfg); 
const smsHandler = new SMSHandler(apiCfg);

const router = express.Router();

function formatHour(hour){
	let formatedHour = hour+':00:00';
	if(hour < 10){
		formatedHour = '0'+hour;
	}
	return formatedHour;
}

function formatDate(year, month, day){
	return year + "-" + month + "-" + day;
}

router.get('/getTurbineIds', (req ,res) => {
	var query = "select id from Turbines";
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

router.get('/getTurbineLocation/:turbineId', (req, res) => {
	var query = "select * from Turbines where id="+req.params.turbineId;
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

router.get('/getTurbineLocations', (req, res) => {
	var query = "select * from Turbines";
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

//Get data points corresponding to time
router.get('/getTurbineDataFromHourById/:turbineId/:year/:month/:day/:hour', (req, res) => {
	var date = formatDate(req.params.year, req.params.month, req.params.day);
	var hour = formatHour(req.params.hour);
	var query = 'select * from WindData where date=\''+date+'\''+'and ' + 'endTime='+'\''+hour+'\' and id='+req.params.turbineId;
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

//Get data points corresponding to time
router.get('/getTurbineDatasFromHour/:year/:month/:day/:hour', (req, res) => {
	var date = formatDate(req.params.year, req.params.month, req.params.day);
	var hour = formatHour(req.params.hour);
	var query = 'select * from WindData where date=\''+date+'\''+'and ' + 'endTime='+'\''+hour+'\'';
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});


//Get data points corresponding to time
router.get('/getTurbineDataFromDayById/:turbineId/:year/:month/:day', (req, res) => {
	var date = formatDate(req.params.year, req.params.month, req.params.day);
	var hour = formatHour(req.params.hour);
	var query = 'select * from WindData where date=\''+date+'\''+ 'and id='+req.params.turbineId;
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

//Get data points corresponding to time
router.get('/getTurbineDatasFromDay/:turbineId/:year/:month/:day', (req, res) => {
	var date = formatDate(req.params.year, req.params.month, req.params.day);
	var hour = formatHour(req.params.hour);
	var query = 'select * from WindData where date=\''+date+'\'';
	db.query(query, (rows) => {
		res.jsonp(rows);
	});
});

//Get all maintenance logs for turbine
router.get('/getTurbineMaintenanceLogs/:turbineId', (req, res) => {
	let query = 'select * from MaintenanceLog where turbineId='+req.params.turbineId;
	db.query(query, rows => {
		res.jsonp(rows);
	})
});

//Add maintenance log to turbine
router.get('/addTurbineLog/:turbineId/:message/:status/:date', (req, res) => {
	db.addMaintenanceLog(req.params.message, req.params.status, req.params.turbineId, req.params.date, (msg) => {
		res.jsonp(msg);
	});
});
//Remove maintenance log
router.get('/removeTurbineLog/:logId', (req,res) => {
	db.removeMaintenanceLog(req.params.logId, msg => {
		res.jsonp(msg);
	})
})

//Send text

router.get('/sendText/:from/:to/:message', (req, res) => {
	smsHandler.sendText(req.params.from, req.params.to, req.params.message, (err, response, body) => {
		if(err){
			res.jsonp(err);
		}else{
			res.jsonp(response);
		}
	});
})


//Get average values for day
router.get('/getAverageValuesFromDayById/:id' (res, req) => {
	let query = "select date, avg(windSpeed), avg(ac_primary_load), avg(hugh_piggott), avg(ac_primary_served), avg(excess_electricity), avg(unmet_load), avg(capacity_shortage), avg(inverter_input_power), avg(inverter_output_power), avg(recitifier_input_power), avg(rectifier_output_power), avg(battery_input_power), avg(battery_state_of_charge), avg(battery_energy_cost) from WindData where id=+"id+"group by date";
	db.query(query, rows => {
		res.jsonp(rows);
	})
})

// Exporting an object as the default import for this module
export default router;
