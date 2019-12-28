const express = require('express');
const router = express.Router();
const { create, index, show, update, destroy } = require('../controllers/messages-controller');

// GET
router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;