import userService from "../../service/user/index.js";
import constant from "../../constant/index.js";

const getUser = async (req, res, next) => {
  try {
    const getUsername = req.user.username;
    const result = await userService.getUser(getUsername);
    return res.status(200).json({
      data: result,
      error: false,
      message: constant.user.response.message.success.DEFAULT_SUCCESS
    });
  } catch (e) {
    next(e);
  }
}

export {
  getUser
}