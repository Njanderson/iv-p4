"use strict";
// Import node module
import express from 'express';
import DBConnection from '../dbconnection.js';
import {cfg} from '../db.cfg';

const db = new DBConnection(cfg); 

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

// Exporting an object as the default import for this module
export default router;
