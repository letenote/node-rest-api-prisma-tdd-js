import { validate } from "../../validation/validate.js";
import userValidation from "../../validation/user/index.js"
import { prismaClient } from "../../application/database.js";
import ResponseError from "../../error/ResponseError.js";
import constant from "../../constant/index.js";

const getUser = async (username) => {
  const getUsername = await validate(userValidation.getUser, username);
  const user = await prismaClient.user.findFirst({
    where: {
      username: getUsername
    },
    select: {
      username: true,
      name: true
    }
  });

  if (!user) throw new ResponseError(404, constant.user.response.message.failed.USER_IS_NOT_FOUND);
  return user;
}

export {
  getUser
}