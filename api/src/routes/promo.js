const express = require('express');
const router = express.Router();

const PreDefined = require('@modules/pre-defined/controller');
const SpeakMore = require('@modules/speak-more/controller');

/**
 * Index route
 */
router.get('/', PreDefined.list);

/**
 * Speak more promo
 */
router.get('/speak-more', SpeakMore.list);

module.exports = router;
