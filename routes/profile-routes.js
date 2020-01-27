const express = require('express')
const router = express.Router()
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
  deleteDocument,
  pushDocumentToProfile,
<<<<<<< HEAD
  profilesAdmin,
  profilesClient
} = require('../controllers/profiles-controller');
=======
} = require('../controllers/profiles-controller')
>>>>>>> master
// const { checkAuth } = require('../middleware/auth-middleware');
const {
  validateProfile,
} = require('../middleware/validation-middleware/profile-validation')

//Multer Settings
const storage = multer.memoryStorage()
const fields = [
  {
    document: 'documentType',
  },
  {
    name: 'file',
  },
  {
    name: 'profileId',
  },
]

//routes
<<<<<<< HEAD
router.post('/', create);
router.get('/', index);
router.get('/profilesApproved', profilesApproved);
router.get('/profilesOnboarding', profilesOnboarding);
router.get('/profilesAdmin', profilesAdmin);
router.get('/profilesClient', profilesClient);
router.get('/:id', show);
router.get('/findByUser/:id', findByUser);
router.put('/:id', update);
router.put('/updateByUser/:id', updateByUser);
router.delete('/:id', destroy);
router.delete('/destroyByUser/:id', destroyByUser);

=======
router.post('/', create)
router.get('/', index)
router.get('/profilesApproved', profilesApproved)
router.get('/profilesOnboarding', profilesOnboarding)
router.get('/:id', show)
router.get('/findByUser/:id', findByUser)
router.put('/:id', update)
router.put('/updateByUser/:id', updateByUser)
router.delete('/:id', destroy)
router.delete('/destroyByUser/:id', destroyByUser)
>>>>>>> master

//image routes
router.post(
  '/:id/uploadDocument',
  multer({
    storage: storage,
  }).fields(fields),
  uploadDocument,
  pushDocumentToProfile,
)
router.post(
  '/:id/uploadProfileImage',
  multer({
    storage: storage,
  }).fields(fields),
  uploadProfileImage,
)

router.post('/:id/delete-document', deleteDocument)

// router.delete('/:id/deleteProfileImage',deleteProfileImage)

module.exports = router
