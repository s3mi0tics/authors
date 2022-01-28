
// IMPORT ALL DEPENDANCIES
const express = require("express")
const app = express();
const cors = require('cors');

// CONFIGURE MONGOOSE
require("./config/mongoose.config")

// CONFIG EXPRESS
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}))


// ROUTES
console.log("server.js before routes")
require("./routes/author.routes")(app)


// LISTEN TO THE PORT
app.listen(8000,()=> console.log('listening on port: 8000'))