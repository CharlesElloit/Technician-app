# Application Backend API

## TODO

I personally encourage you to fork the repository instead of cloning or downloading it directly to you mechine,
So to get some feedbacks if your forked repository is not up to date with my repository and it also make it easier for you to
make some pull request if you need to do so. and a lot more

- [Usage](#Useage)
- [EndPoints](#Endpoints)

# Scripts

`npm start` &nbsp; &nbsp;which will start the server without automatic reload <br>
`npm run dev` &nbsp; &nbsp; which start the server using nodemon and automatic reload <br>
`npm run watch` &nbsp; &nbsp; this will also run using nodemon and automatic reload<br>
`npm run lint` &nbsp; &nbsp; this will run eslint to catch any error and enforce style rules <br>
`npm run test` &nbsp; &nbsp; this will run jest for testing if our code is doing what is expected to do.

# Endpoints

`http://localhost:8080/api/signup` &nbsp; &nbsp; This will create a new user.<br>
`http://localhost:8080/api/signin` &nbsp; &nbsp; This will sign in users in to their respective accounts <br>
`http://localhost:8080/api/users` &nbsp; &nbsp; This will return all users in the database as a json format <br>
`http://localhost:8080/api/user/5fbcc9670bc507679c33d0c6` &nbsp; &nbsp; This returns a single user information <br>
`http://localhost:8080/api/users/5fbcc9670bc507679c33d0c6` &nbsp; &nbsp; This Updates user information <br>

### The below routes are not working yet

`http://localhost:8080/api/technicians` &nbsp; &nbsp; This will create a new techians in the database <br>
`http://localhost:8080/api/technicians` &nbsp; &nbsp; This will return all techians in the database as a json format <br>
`http://localhost:8888/api/technician/5fb4f7d56d0f34e05602c976` &nbsp; &nbsp; This will return a single techian data from
the database for the specified id

# Useage

1: First make sure your runing node version 12.13.x or greater
2: Change directory to the project folder, and if you change the folder name make sure your're in the
right one.
3: Run ( npm install or npm i ) to install the dependencies used in this project but make sure you run this
command on the root of the project
4: Now to view the project run ( npm run dev ) to start the development server on port -> 8080

```
Happy hacking :)
```
