# iv-p4
iv16 final project

Visualizing Wind Power Data

## Available routes
|Route|Params|Data|
|-----|----|------|
|getTurbineIds|-|List of turbine ids |
|getTurbineLocation|turbineId| {id, longitude, latitude}|
|getTurbineLocations|-|List({id, longitude, latitude})
|getTurbineDataFromHourById|turbineId, year, month, day, hour|
|getTurbineDatasFromHour|year, month, day, hour|
|getTurbineDataFromDayById|turbineId, month, day, year|
|getTurbineDatasFromDay|month,day,year|
|getTurbineMaintenanceLogs|turbineId|List({date, logId, message, turbineStatus, turbineId})|
|getMaintenanceLogs|-|List({date, logId, message, turbineStatus, turbineId})|
|addTurbineLog|turbineId, message, status, date|
|removeTurbineLog|logId|
|getAverageValuesById|id|List({all datas averaged over the day})|


##Workflow for backend
1. npm install
2. npm run server
3. Now your server should be running.
