const { Thought, User } = require("../models");

const user = {
getAllUsers(req,res) {
    User.find({}).populate('thoughts')
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


 deleteUser({params}, res) {
    User.findOneAndDelete({_id: params.id})
    .then(data => {
        if(!data) {
            res.status(404).json({message: 'No User with this particular ID!'});
            return;
        }
        res.json(data);
    })
    .catch(err => res.status(400).json(err));
},

 addFriend() {

},

 deleteFriend() {

},

}

module.exports = user;