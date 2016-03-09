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


##Workflow for backend
1. npm install
2. npm run server
3. Now your server should be running.
