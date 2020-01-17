const express = require('express');
const router = express.Router();
const multer = require('multer')
const { 
  create, 
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
    profilesOnboarding,
    getDocument,
    deleteDocument,
    downloadDocument       
  } = require('../controllers/profiles-controller');
// const { checkAuth } = require('../middleware/auth-middleware');
const { validateProfile } = require('../middleware/validation-middleware/profile-validation'); 

//Multer Settings
const storage = multer.memoryStorage();
const fields = [
  {document: 'documentType'},
  {name: 'file'},
  {name: 'profileId'}
]

//routes
router.post('/', create);
router.get('/', index);
router.get('/profilesApproved', profilesApproved);
router.get('/profilesOnboarding', profilesOnboarding);
router.get('/:id', show);
router.get('/findByUser/:id', findByUser);
router.put('/:id', update);
router.put('/updateByUser/:id', updateByUser);
router.delete('/:id', destroy);
router.delete('/destroyByUser/:id', destroyByUser);


//image routes
router.post('/:id/uploadDocument', multer({storage: storage}).fields(fields), uploadDocument)
router.post('/:id/uploadProfileImage', multer({storage: storage}).fields(fields), uploadProfileImage)

router.post('/:id/downloadDocument/:fileName',downloadDocument)

router.get('/:id/getDocument', getDocument)

// router.delete('/:id/deleteDocument', deleteDocument)
// router.delete('/:id/deleteProfileImage',deleteProfileImage)

module.exports = router;