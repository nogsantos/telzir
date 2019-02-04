const express = require('express');
const router = express.Router();

const PreDefined = require('@modules/pre-defined/controller');
const SpeakMore = require('@modules/speak-more/controller');

router.get('/default/:origin/:destiny/:timer', PreDefined.calculate);
router.get('/speak-more/:origin/:destiny/:timer/:plan', SpeakMore.calculate);
router.get('/speak-more/list', SpeakMore.list);
router.get('/speak-more/setup', SpeakMore.setup);

module.exports = router;
