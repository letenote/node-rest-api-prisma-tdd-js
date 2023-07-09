import supertest from "supertest";
import { web } from "../src/application/web.js";
import { prismaClient } from "../src/application/database.js";
import constant from "../src/constant/index.js";

const _DUMMY_TEST = {
  username: "username-dummy",
  password: "password-dummy",
  name: "name-dummy"
}

describe('POST /api/users', () => {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: _DUMMY_TEST.username
      }
    })
  });

  it('should can rergister new user', async () => {
    const result = await supertest(web)
      .post('/api/users')
      .send({
        username: _DUMMY_TEST.username,
        password: _DUMMY_TEST.password,
        name: _DUMMY_TEST.name
      });

    expect(result.status).toBe(200);
    expect(result.body.error).toBe(false);
    expect(result.body.message).toBe(constant.user.response.message.success.USER_CREATED);
    expect(result.body.data.username).toBe(_DUMMY_TEST.username);
    expect(result.body.data.name).toBe(_DUMMY_TEST.name)
    expect(result.body.data.password).toBeUndefined();
  });

  it('should reject if request is invalid', async () => {
    const result = await supertest(web)
      .post('/api/users')
      .send({
        username: '',
        password: '',
        name: ''
      });

    expect(result.status).toBe(400);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBeDefined();
    expect(result.body.data).toBe(null);
  });

  it('should reject if username already registered', async () => {
    let result = await supertest(web)
      .post('/api/users')
      .send({
        username: _DUMMY_TEST.username,
        password: _DUMMY_TEST.password,
        name: _DUMMY_TEST.name
      });

    expect(result.status).toBe(200);
    expect(result.body.error).toBe(false);
    expect(result.body.message).toBe(constant.user.response.message.success.USER_CREATED);
    expect(result.body.data.username).toBe(_DUMMY_TEST.username);
    expect(result.body.data.name).toBe(_DUMMY_TEST.name)
    expect(result.body.data.password).toBeUndefined();

    result = await supertest(web)
      .post('/api/users')
      .send({
        username: _DUMMY_TEST.username,
        password: _DUMMY_TEST.password,
        name: _DUMMY_TEST.name
      });

      console.log("DEBUG", {
        status: result.status,
        body: result.body
      })

    expect(result.status).toBe(400);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBe(constant.user.response.message.failed.USERNAME_ALREADY_EXIST);
    expect(result.body.data).toBe(null);
  });
});