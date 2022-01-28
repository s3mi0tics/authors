const AuthorController = require("../controllers/author.controller")
const Author = require("../models/author.model")

module.exports = app =>{
    console.log("server=>routes")
    // app.get("/", AuthorController.index)
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor),
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
} 