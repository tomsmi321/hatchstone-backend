const express = require('express');
const router = express.Router();
const { index, show, update, destroy, uploadDocument, upload } = require('../controllers/profiles-controller');
// const { checkAuth } = require('../middleware/auth-middleware');

router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);
router.post('/:id/uploadDocument' ,upload, uploadDocument)

module.exports = router;