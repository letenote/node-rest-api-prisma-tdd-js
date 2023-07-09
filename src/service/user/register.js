import { validate } from "../../validation/validate.js";
import userValidation from "../../validation/user/index.js"
import { prismaClient } from "../../application/database.js";
import ResponseError from "../../error/ResponseError.js";
import bcrypt from "bcrypt";
import constant from "../../constant/index.js";

const register = async (request) => {
  const user = validate(userValidation.register, request);
  const countUser = await prismaClient.user.count({
    where: {
      username: user.username
    }
  });

  if (countUser === 1) throw new ResponseError(400, constant.user.response.message.failed.USERNAME_ALREADY_EXIST);
  user.password = await bcrypt.hash(user.password, 10);
  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true
    }
  });
}

export {
  register
}