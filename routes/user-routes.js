const express = require('express');
const router = express.Router();
const { index, show, update, destroy } = require('../controllers/users-controller');
const { checkAuth } = require('../middleware/auth-middleware');
const { currentUser } = require('../controllers/private-controller');

// use checkAuth middleware on all user routes to ensure user is logged in
// router.use(checkAuth);

router.get('/', index);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', destroy);

// test route to check the current user, here currentUser function is passed as a callback
// which will return an object containing the current user
// router.get('/current-user', currentUser)

module.exports = router;