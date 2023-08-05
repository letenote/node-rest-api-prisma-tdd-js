import Joi from "joi";

const getUser = Joi.string().max(100);

export {
  getUser
}