import { prismaClient } from "../application/database.js";
import constant from "../constant/index.js";

const authMiddleware = async (req, res, next) => {
  const token = req.get('Authorization');
  console.log("DEBUG 1", {
    token
  })
  if (token === undefined || token === null || !token) {
    return res.status(401).json({
      data: null,
      error: true,
      message: constant.user.response.message.failed.UNAUTHORIZED
    }).end();
  };

  const user = await prismaClient.user.findFirst({
    where: {
      token: token
    }
  });

  if (!user) {
    return res.status(401).json({
      data: null,
      error: true,
      message: constant.user.response.message.failed.UNAUTHORIZED
    }).end();
  };

  req.user = user;
  next();
};

export {
  authMiddleware
}