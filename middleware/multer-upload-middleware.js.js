const multer = require('multer')

//Fields expected by document upload route
const fields = [
    {name: 'name'},
    {name: 'file'}
  ]

//Multer Settings
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).fields(fields);




module.exports = { upload }