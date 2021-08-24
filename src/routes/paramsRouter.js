const { Router } = require('express');

const router = Router();

const paramsController = require( '../controller/paramsController');

router.get('/new', paramsController.createClient);

router.get('/set', paramsController.updateClient);

module.exports = router;