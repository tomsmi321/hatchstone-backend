// get the current user from req.user which is set in the checkAuth middleware
// used in private routes
const currentUser = (req, res) => {
    console.log(req.user);
    return res.send({
        currentUser: req.user
    })
}

module.exports = {
    currentUser
}