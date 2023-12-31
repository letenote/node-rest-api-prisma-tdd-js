import supertest from "supertest";
import { web } from "../src/application/web.js";
import constant from "../src/constant/index.js";
import { createTestUser, removeTestUser, _DUMMY_TEST } from "./ test-util.js";

describe('POST /api/users/login', () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it('should can login', async () => {
    const result = await supertest(web)
      .post('/api/users/login')
      .send({
        username: _DUMMY_TEST.username,
        password: _DUMMY_TEST.password
      });

    expect(result.status).toBe(200);
    expect(result.body.error).toBe(false);
    expect(result.body.message).toBe(constant.user.response.message.success.USER_LOGIN);
    expect(result.body.data.username).toBeUndefined();
    expect(result.body.data.password).toBeUndefined();
    expect(result.body.data.name).toBeUndefined();
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe(_DUMMY_TEST.token);
  });

  it('should reject login if request is invalid', async () => {
    const result = await supertest(web)
      .post('/api/users/login')
      .send({
        username: "",
        password: ""
      });

    expect(result.status).toBe(400);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBe(null);
  });

  it('should reject login if password is wrong', async () => {
    const result = await supertest(web)
      .post('/api/users/login')
      .send({
        username: _DUMMY_TEST.username,
        password: "salah"
      });

    expect(result.status).toBe(401);
    expect(result.body.error).toBe(true);
    expect(result.body.data).toBe(null);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.failed.WRONG_USERNAME_OR_PASSWORD);
  });

  it('should reject login if username is wrong', async () => {
    const result = await supertest(web)
      .post('/api/users/login')
      .send({
        username: "salah",
        password: "salah"
      });

    expect(result.status).toBe(401);
    expect(result.body.error).toBe(true);
    expect(result.body.data).toBe(null);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.failed.WRONG_USERNAME_OR_PASSWORD);
  });
});