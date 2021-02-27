// const request = require("supertest");
// const app = require("../app");

// This is a test example to make sure
// everything works fine
describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
});

function add(x, y) {
  return x + y;
}

test("should return 3", () => {
  expect(add(1, 2)).toBe(3);
});

// describe("Get /users", () => {
//   test("Should return all the users in the database", () => {
//     return request(app)
//       .get("/users")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         expect(response.body.length).toBe(4);
//       });
//   });
// });

// describe('GET /', () => {
//   // token not being sent - should respond with a 401
//   test('It should require authorization', () => {
//     return request(app)
//       .get('/')
//       .then((response) => {
//         expect(response.statusCode).toBe(401);
//       });
//   });
//   // send the token - should respond with a 200
//   test('It responds with JSON', async () => {
//     return request(app)
//       .get('/')
//       .set('Authorization', `Bearer ${token}`)
//       .then((response) => {
//         expect(response.statusCode).toBe(200);
//         expect(response.type).toBe('application/json');
//       });
//   });
// });

// describe("Creating a POST request to /signup", () => {
//   test("It should responds with the newly created user id and message", async () => {
//     const user = await request(app)
//       .post("/signup")
//       .send({
//         name: "New Test User",
//         email: "newTestUser@yahoo.com",
//         password: "newTestUser"
//       });

//     // make sure we add it correctly
//     expect(user.body).toHaveProperty("id");
//     expect(user.body).toHaveProperty("createdAt")
//     expect(user.body.name).toBe("New Test User");
//     expect(user.body.email).toBe("newTestUser@yahoo.com");
//     expect(user.statusCode).toBe(201);

//     // make sure we have 3 students now
//     const response = await request(app).get("/api/users");
//     expect(response.body.length).toBe(2);
//   });
// });

//updating user test
// describe("PATCH /students/1", () => {
//   test("It responds with an updated student", async () => {
//     const newStudent = await request(app)
//       .post("/students")
//       .send({
//         name: "Another one"
//       });
//     const updatedStudent = await request(app)
//       .patch(`/students/${newStudent.body.id}`)
//       .send({ name: "updated" });
//     expect(updatedStudent.body.name).toBe("updated");
//     expect(updatedStudent.body).toHaveProperty("id");
//     expect(updatedStudent.statusCode).toBe(200);

//     // make sure we have 3 students
//     const response = await request(app).get("/students");
//     expect(response.body.length).toBe(3);
//   });
// });
