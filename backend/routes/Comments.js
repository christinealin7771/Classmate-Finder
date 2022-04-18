const express = require("express");
var Sequelize = require('sequelize');
const router = express.Router()
const {Comments} = require("../models")

//------------------- API routes for Social Comments ----------------------//
// express route to get all messages from post_id
router.get("/getCommentsFromID/:id", async(req, res) => {
    const id = req.params.id;
    // ex query: select * from comments where post_id = 1 order by timestamp
    const result = await Comments.findAll({
        where: {
            postid: id
        },
        order: [
            ['timestamp', 'ASC']
        ]
    })
    res.json(result);
});

// express route to create new comments
router.post('/createComment', async(req, res) => {
    const user = req.body.userName;
    const msg = req.body.message;
    const postid = req.body.postID;
    //  ex query: insert into comments (username, message, timestamp, post_id) values ('routerle', 'hello my name bob', CURRENT_TIME(), 2)
    Comments.create({
        username: user,
        message: msg,
        postid: postid
    }).catch(err => {
        console.log(err);   
    })
    res.json("success");
});
//------------------ end API routes for Social Comments -------------------//

module.exports = router