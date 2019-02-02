const express = require('express');
const router = express.Router();

const briefing = require('@modules/briefing/controller');

router.get('/b/', briefing.list);
router.get('/b/:ref_id', briefing.byreference);
router.get('/b/setup', briefing.setup);

module.exports = router;
