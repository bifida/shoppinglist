const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


const shoppingListService = require('./ShoppingListService');
const customGroupService = require('./CustomGroupService');
const unitService = require('./UnitService');

router.use(shoppingListService);
router.use(customGroupService);
router.use(unitService);

module.exports = router;

