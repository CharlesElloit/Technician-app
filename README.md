# Techian Application Backend API

- [Usage](##Useage)
- [EndPoints](##Endpoints)

## Scripts

[npm start]() &nbsp; &nbsp;which will start the server without automatic reload <br>
[npm run dev]() &nbsp; &nbsp; which start the server using nodemon and automatic reload <br>
[npm run watch]() &nbsp; &nbsp; this will also run using nodemon and automatic reload<br>
[npm run lint]() &nbsp; &nbsp; this will run eslint to catch any error and enforce style rules <br>
[npm run test]() &nbsp; &nbsp; this will run jest for testing if our code is doing what is expected to do.

## Endpoints

### Note:

Currently the endpoints are not returning any data.

[/api/techians](http://localhost:8080/api/techians) &nbsp; &nbsp; This will create a new techians in the database <br>
[/api/techians](http://localhost:8080/api/techians) &nbsp; &nbsp; This will return all techians in the database as a json format <br>
[/api/techian/1]() &nbsp; &nbsp; This will return a single techian data from the database for the specified id

## Useage

- First make sure your runing node version 12.13.x or greater
- Change directory to the project folder, and if you change the folder name make sure your're in the right one.
- Run [npm install]() or [npm i]() to install the dependencies used in this project but make sure you run this command on the root of the project
- Now to view the project vist [http://localhost:8080/api/techians] and you will see a message that say &nbsp; &nbsp;`Hey! It actual works!! :)`
