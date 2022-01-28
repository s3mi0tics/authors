const Author = require('../models/author.model')

// find all
module.exports.allAuthors = (req, res) => {
    console.log("server=>controller")
    Author.find()
        .then(allAuthors =>{ 
            console.log("got all authors")
            res.json(allAuthors)
        })
        .catch(err=> res.status(400).json(err))
}

// find one
module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(author =>{ 
        console.log("got one author")
        res.json(author)
    })
    .catch(err=> res.status(400).json(err))
}

// Create one
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err=> res.status(400).json(err))
}

// Update one ( find one + create)
module.exports.updateAuthor = (req, res) => {
   Author.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    { new: true, runValidators: true})
    .then(author =>{ 
        console.log("got one author")
        res.json(author)
    })
        .catch(err=> res.status(400).json(err))
}

// delete one
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(result =>{ 
        console.log("deleted one")
        res.json(result)
    })
    .catch(err=> res.status(400).json(err))

}