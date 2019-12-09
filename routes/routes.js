const controller = require('../controller/controller');
const express = require('express');
const router = express.Router();

router.get('/users/ten', controller.users.getTen);
router.get('/tests/threedish', controller.test.threeTestDishes)
router.get('/tests/:dish', controller.test.getDishPics)
module.exports = router;