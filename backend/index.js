import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")

})

const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    University: String,
    Branch: String,
    Roll: String,
    password:String
    
})
const User = new mongoose.model("User", userSchema)


// routes
app.post("/admin", (req, res) => {
    
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfully", user: user })
            } else {
                res.send({ message: " Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})


app.post("/student", (req, res) => {
   
    const { name, last_name, email, University, Branch, Roll, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
        } else {

            const user = new User({
                name,
                last_name,
                email,
                University,
                Branch,
                Roll,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered" })
                }
            })

        }
    })


})



app.listen(9002, () => {
    console.log("BE started at port 9002")
})