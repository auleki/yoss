const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/register_login', (req, res, next) => {
  passport.authenticate("local")
})

export default router