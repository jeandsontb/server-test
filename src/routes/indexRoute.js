const { Router } = require('express');

const router = Router();

const indexController = require('../controller/indexController');

router.get('/', indexController.list);

router.get('/page', indexController.create);

router.get('/calc', indexController.calc);

router.get('/param/:number', indexController.verify);

module.exports = router;
