import userService from "../../service/user/index.js";
import constant from "../../constant/index.js";

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    return res.status(200).json({
      data: result,
      error: false,
      message: constant.user.response.message.success.USER_LOGIN
    });
  } catch (e) {
    next(e);
  }
}

export {
  login
}