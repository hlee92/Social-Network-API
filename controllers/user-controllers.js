const { Thought, User } = require("../models");

const user = {
getAllUsers(req,res) {
    User.find({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
},


 getUserById() {

},


 createUser({body}, res) {
    User.create(body)
    .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

},

 updateUser() {

},


 deleteUser() {

},

 addFriend() {

},

 deleteFriend() {

},

}

module.exports = user;