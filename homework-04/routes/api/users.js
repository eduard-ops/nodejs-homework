const express = require("express");

const router = express.Router();

const { auth, ctrlWrapper, validation } = require("../../middlewares");

const { joiSubscriptionSchema } = require("../../models/user");

const { users: ctrl } = require("../../controlles");

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.patch(
  "",
  auth,
  validation(joiSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
