const app = require('./app');
require('dotenv').config()

// define a PORT
const PORT = process.env.PORT

// make the app run on the specified port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
