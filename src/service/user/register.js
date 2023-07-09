import {validate} from "../validation/validation.js";
import userValidation from "../../validation/user/index.js"
import {prismaClient} from "../application/database.js";
import {ResponseError} from "../error/response-error.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validate(userValidation.register, request);
  const countUser = await prismaClient.user.count({
      where: {
          username: user.username
      }
  });

  if (countUser === 1) throw new ResponseError(400, "Username already exists");
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