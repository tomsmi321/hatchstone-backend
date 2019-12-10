const app = require('./app');

// define a PORT
const PORT = 5000;

// make the app run on the specified port
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
