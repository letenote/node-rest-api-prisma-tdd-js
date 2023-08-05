import { validate } from "../../validation/validate.js";
import userValidation from "../../validation/user/index.js"
import { prismaClient } from "../../application/database.js";
import ResponseError from "../../error/ResponseError.js";
import bcrypt from "bcrypt";
import constant from "../../constant/index.js";
import { v4 as uuid } from "uuid";

const login = async (request) => {
  const loginRequest = await validate(userValidation.login, request);
  const user = await prismaClient.user.findFirst({
    where: {
      username: loginRequest.username
    },
    select: {
      username: true,
      password: true,
      id: true
    }
  });

  if (!user) throw new ResponseError(401, constant.user.response.message.failed.WRONG_USERNAME_OR_PASSWORD);
  const passwordIsValid = await bcrypt.compare(loginRequest.password, user.password);
  if (!passwordIsValid) throw new ResponseError(401, constant.user.response.message.failed.WRONG_USERNAME_OR_PASSWORD);
  const token = uuid().toString();
  return prismaClient.user.update({
    data: {
      token
    },
    where: {
      id: user.id
    },
    select: {
      token: true
    }
  });
}

export {
  login
}