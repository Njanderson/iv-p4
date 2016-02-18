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


##Workflow
1. Get both packages, iv-p4 and iv-p4-frontend
2. Get npm, run npm install in both directories generated
3. Get the credentials to create a valid db.cfg file to connect with AWS with valid credentials
4. Run npm start to start running the backend; restart if you make changes
5. After making front-end changes, run webpack in the iv-p4-frontend directory to have webpack regenerate
