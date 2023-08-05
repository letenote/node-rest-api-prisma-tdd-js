import supertest from "supertest";
import { web } from "../src/application/web.js";
import constant from "../src/constant/index.js";
import { createTestUser, removeTestUser, _DUMMY_TEST } from "./ test-util.js";

describe('GET /api/users/current', () => {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it('should get error auth if headers !Authorization', async () => {
    const result = await supertest(web)
      .post('/api/users/current')

    expect(result.status).toBe(401);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.failed.UNAUTHORIZED);
  });

  it('should get error auth if headers Authorization is null', async () => {
    const result = await supertest(web)
      .post('/api/users/current')
      .set('Authorization', null)

    expect(result.status).toBe(401);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.failed.UNAUTHORIZED);
  });

  it('should get error auth if headers Authorization is wrong', async () => {
    const result = await supertest(web)
      .post('/api/users/current')
      .set('Authorization', "iswrong")

    expect(result.status).toBe(401);
    expect(result.body.error).toBe(true);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.failed.UNAUTHORIZED);
  });

  it('should can get current user', async () => {
    const result = await supertest(web)
      .post('/api/users/current')
      .set('Authorization', _DUMMY_TEST.token)

    expect(result.status).toBe(200);
    expect(result.body.error).toBe(false);
    expect(result.body.message).toBeDefined();
    expect(result.body.message).toBe(constant.user.response.message.success.DEFAULT_SUCCESS);
    expect(result.body.data.username).toBe(_DUMMY_TEST.username);
    expect(result.body.data.name).toBe(_DUMMY_TEST.name);
  });
});