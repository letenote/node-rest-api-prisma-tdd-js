import userService from "../../service/user/index.js";

const register = async (req, res, next) => {
  try {
      const result = await userService.register(req.body);
      return res.status(200).json({
          data: result
      });
  } catch (e) {
      next(e);
  }
}

export {
  register
}