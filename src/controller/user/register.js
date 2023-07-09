import userService from "../../service/user/index.js";
import constant from "../../constant/index.js";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    return res.status(200).json({
      data: result,
      error: false,
      message: constant.user.response.message.success.USER_CREATED
    });
  } catch (e) {
    next(e);
  }
}

export {
  register
}