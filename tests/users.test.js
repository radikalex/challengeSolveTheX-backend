const request = require("supertest");
const app = require("../index.js");
const { User } = require("../models/index.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const env = process.env.NODE_ENV || 'development';
const { jwt_secret } = require("../config/config.json")[env];

describe("testing/users", () => {
  afterAll(() => {
    return User.destroy({ where: {}, truncate: true });
  });

  let token;
  const user = {
    name: "Username",
    email: "test@example.com",
    password: "123456",
    role: "user"
  };

  test("Create a user", async () => {
    let usersCount = await User.count();
    expect(usersCount).toBe(0);
    const res = await request(app).post("/users").send(user).expect(201);
    const sendUser = {
      ...user,
      id: res.body.user.id,
      password: res.body.user.password,
      createdAt: res.body.user.createdAt,
      updatedAt: res.body.user.updatedAt,
    };
    const newUser = res.body.user;
    expect(newUser).toEqual(sendUser);
    expect(bcrypt.compareSync(user.password, res.body.user.password)).toBe(true);
    expect(res.body.user.id).toBeDefined();
    expect(res.body.user.createdAt).toBeDefined();
    expect(res.body.user.updatedAt).toBeDefined();
    usersCount = await User.count();
    expect(usersCount).toBe(1);
  });

  test("Login a user", async () => {
    const res = await request(app)
      .post("/users/login")
      .send({ email: "test@example.com", password: "123456" })
      .expect(200);
    token = res.body.token;
  });

  test("Logout a user record", async () => {
    const res = await request(app)
      .delete("/users/logout")
      .set({ Authorization: token })
      .expect(200);
      expect(res.body.message).toBe("Disconnected successfully");
  });
  
});