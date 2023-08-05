import { prismaClient } from "../src/application/database.js";
import bcrypt from "bcrypt";

export const _DUMMY_TEST = {
  username: "username-dummy",
  password: "password-dummy",
  name: "name-dummy",
  token: "token-dummy"
};

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      username: _DUMMY_TEST.username,
      password: await bcrypt.hash(_DUMMY_TEST.password, 10),
      name: _DUMMY_TEST.name,
      token: _DUMMY_TEST.token
    }
  })
};

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: _DUMMY_TEST.username
    }
  })
}