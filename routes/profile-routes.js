const express = require('express');
const router = express.Router();
const multer = require('multer')
const { index, show, update, destroy, uploadDocument } = require('../controllers/profiles-controller');


// const { checkAuth } = require('../middleware/auth-middleware');

const fields = [
    {name: 'name'},
    {name: 'file'}
  ]

//Multer Settings
const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).fields(fields);


//routes
router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

// .multer will be used in all subsequent requests so put this at the bottom
router.use(multer({ storage: storage }).fields(fields))
router.post('/:id/uploadDocument', uploadDocument)

module.exports = router;