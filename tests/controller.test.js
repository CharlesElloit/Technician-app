// This is a test example to make sure
// everything works fine

function testAdd(num1, num2) {
  return num1 + num2;
}

test("addtion of 1 + 2 should return 3", () => {
  expect(testAdd(1, 2)).toBe(3);
});
