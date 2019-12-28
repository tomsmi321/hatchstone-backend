const express = require('express');
const router = express.Router();
const multer = require('multer')
const { create, index, show, update, destroy, uploadDocument, uploadProfileImage } = require('../controllers/profiles-controller');
// const { checkAuth } = require('../middleware/auth-middleware');

//Multer Settings
const storage = multer.memoryStorage();
const fields = [
  {name: 'name'},
  {name: 'file'}
]


//routes
router.post('/', create);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

// .multe will be used in all subsequent requests so put this at the bottom
// router.use(multer({ storage: storage }).fields(fields))
router.post('/:id/uploadDocument', multer({storage: storage}).fields(fields), uploadDocument)
router.post('/:id/uploadProfileImage', multer({storage: storage}).fields(fields), uploadProfileImage)

module.exports = router;