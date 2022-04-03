const express = require("express");
const router = express.Router()
const {Users} = require("../models")
const bcrypt = require("bcrypt");

const {sign } = require('jsonwebtoken')

// router.get("/", (req,res) =>{
//     res.json("Hello World")
// })

router.post("/", async(req,res) => {
    const {name, email,username, password} = req.body;
    bcrypt.hash(password, 10).then((hash)=> {
        Users.create({
            username: username,
            password: hash,
            name: name,
            email: email,
        })
        res.json("Success");
    })
});

router.get("/all", async (req,res) => {
    const allUsers = await Users.findAll();
    res.json(allUsers);
})

router.post('/login', async(req,res) => {
    const {username , password} = req.body;

    const user = await Users.findOne({where: {username: username}});

    if (!user) res.json({error: "Username Doesn't Exist"});

    else 
    bcrypt.compare(password, user.password).then((match) => {
        if (!match){
            res.json({ error: "Wrong Username And Password Combination" });
        } 
        else {
        const accessToken = sign(
            {username: user.username, id: user.id}, 
            "importantinformation"
        );
        res.json(accessToken);
        }

    });
})

router.get("/basicinfo/:id", async(req,res)=> {
    const id = req.params.id;

    const basicInfo = await Users.findByPk(id, {
        attributes: {exclude: ["password"]},

    })

    res.json(basicInfo);
})




module.exports = router