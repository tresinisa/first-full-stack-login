const express = require('express');
const app = express();
const cors = require("cors");

//=====middleware=====//
app.use(cors())
app.use(express.json())

//mock data base//
const users = [
    {email: "rob@dvds.com", password: "rob123"},
    {email: "john@dvds.com", password: "john123"},
]

//=====API Endpoints=====//
//Root Endpoint//
app.get("/", (req, res) => {
    console.log("The / endpoint was hit")
    res.send("Home Page")
})

//Login Endpoint
app.post("/login-with-fetch", (req, res) => {
    console.log("the /login-with-fetch end point was hit");
    console.log(req.body)
    console.log(req.body.email);

    //Loop over the database and check for matches with the user dta from the frontend
    for (i=0; i<users.length; i++){
        if(users[i].email === req.body.email && users[i].password === req.body.password){
            console.log("success")
            return res.sendStatus(200)
        }
    }
    res.sendStatus(401)

})



















//===============Port===============//
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is alive on http://localhost:${PORT}`)
})
.on("error", () => {
    if(error.code === "EADDRINUSE") {
        console.log("Port in use, try nother port or close other servers")
    } else {
        console.log("Server error:", error)
    }
})