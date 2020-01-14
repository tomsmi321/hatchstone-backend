const express = require('express');
const router = express.Router();
const multer = require('multer')
const { create, 
        index, 
        show, 
        findByUser, 
        update, 
        updateByUser, 
        destroy, 
        destroyByUser, 
        uploadDocument, 
        uploadProfileImage,
        profilesApproved,
        profilesOnboarding } = require('../controllers/profiles-controller');
// const { checkAuth } = require('../middleware/auth-middleware');
const { validateProfile } = require('../middleware/validation-middleware/profile-validation'); 

//Multer Settings
const storage = multer.memoryStorage();
const fields = [
  {name: 'name'},
  {name: 'file'}
]

//routes
router.post('/', validateProfile, create);
router.get('/', index);
router.get('/profileApproved', profilesApproved);
router.get('/profilesOnboarding', profilesOnboarding);
router.get('/:id', show);
router.get('/findByUser/:id', findByUser);
router.put('/:id', validateProfile, update);
router.put('/updateByUser/:id', validateProfile, updateByUser);
router.delete('/:id', destroy);
router.delete('/destroyByUser/:id', destroyByUser);

// .multe will be used in all subsequent requests so put this at the bottom
// router.use(multer({ storage: storage }).fields(fields))
router.post('/:id/uploadDocument', multer({storage: storage}).fields(fields), uploadDocument)
router.post('/:id/uploadProfileImage', multer({storage: storage}).fields(fields), uploadProfileImage)

module.exports = router;