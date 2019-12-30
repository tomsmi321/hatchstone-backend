const express = require('express');
const router = express.Router();
const { create, index, show, findByUser, update, destroy } = require('../controllers/conversations-controller');

// GET
router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.get('/findByUser/:id', findByUser);
router.put('/:id', update);
router.delete('/:id', destroy)


module.exports = router;