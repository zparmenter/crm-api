const router = require("express").Router();
const ctrl = require("../controllers");

//middleware
const authRequired = require("../middleware/authRequired");

// routes
router.post("/register", ctrl.users.register);
router.post("/login", ctrl.users.login);
router.get("/profile", authRequired, ctrl.users.profile);
router.get('/users', ctrl.users.index)

// exports
module.exports = router;