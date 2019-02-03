const express = require('express');
const router = express.Router();

const briefing = require('@modules/briefing/controller');

router.get('/list', briefing.list);
router.get('/ref/:ref_id', briefing.byreference);
router.get('/setup', briefing.setup);

module.exports = router;
