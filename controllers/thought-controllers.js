const { Thought, User } = require("../models");
const { populate } = require("../models/User");

const controller = {
    getAllThoughts (req,res) {
    Thought.find({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
},


getThoughtById(req,res) {
    Thought.findOne({_id: req.params.id})
    .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
},


createThought({body}, res) {
    Thought.create(body)
    .then(data => {
        console.log(data)
        return User.findOneAndUpdate(
            {_id: body.userId},
            {$push: {thoughts: data._id}},
            {new: true}
        )
    })
    .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })

},


updateThought() {


},


deleteThought({params}, res) {
    Thought.findOneAndDelete({_id: params.id})
    .then(data => {
        if (!data) {
            res.status(404).json({message: 'No thought was found with this id'});
            return;
        }
        return User.findOneAndUpdate(
            {username: data.username},
            {$pull: {thoughts: params.id}}
        )
        .then(() =>{
            res.json({message: 'Thought has been deleted successfully!'})
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
},


addReaction() {

},



deleteReaction() {

},

}

module.exports = controller;