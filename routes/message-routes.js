const express = require('express');
const router = express.Router();
const { create, index, show, findByAuth, findByConversation, update, destroy } = require('../controllers/messages-controller');

// GET
router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.get('/findByAuth/:id', findByAuth);
router.get('/findByConversation/:id', findByConversation);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;