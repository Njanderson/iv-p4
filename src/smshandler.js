"use strict"

import request from 'request';

export default class SMSHandler{
	
	constructor(cfg){
		this.apiUrl = cfg.url;
		this.apiUser = cfg.user;
		this.apiPass = cfg.pass;
	}

	sendText(from, to, message, callback){
		let msg = {
			'from': from,
			'to': to,
			'message': message
		};

		request.post(this.apiUrl+"SMS",
		{
			'auth': {
				'user': this.apiUser,
				'pass': this.apiPass,
				'sendImmediately' : false
			},
			'form': msg
		},
		callback
		)
		

	}

}