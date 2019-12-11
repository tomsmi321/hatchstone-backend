const express = require('express');
const router = express.Router();
const { index, show, update, destroy } = require('../controllers/profiles-controller');
// const { checkAuth } = require('../middleware/auth-middleware');

router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;