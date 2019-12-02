const controller = require('../controller/controller');
const express = require('express');
const router = express.Router();

router.get('/users/ten', controller.users.getTen);

module.exports = router;