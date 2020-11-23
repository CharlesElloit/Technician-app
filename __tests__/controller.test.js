
// const request = require('supertest')
// const app = require('../app')

// This is a test example to make sure
// everything works fine
describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

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
//       .post("/api/signup")
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
