create table MaintenanceLog(
	date date not null,
	logId int not null AUTO_INCREMENT,
	message varchar(30000),
	turbineStatus varchar(100),
	turbineId int not null,
	foreign key (turbineId) references Turbines(id),
	primary key (logId) 
	)