const { Schema, model } = require("mongoose");

const Joi = require("joi");

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

const User = model("user", userSchema);

const joiSchema = Joi.object({
  email: Joi.string().trim().required(),
  password: Joi.string().trim().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const joiSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .trim()
    .required()
    .valid("starter", "pro", "business"),
});

module.exports = {
  User,
  joiSchema,
  joiSubscriptionSchema,
};
