const express = require("express");
var Sequelize = require('sequelize');
const router = express.Router()
const {Posts, Comments} = require("../models")

//--------------------- API routes for Social Posts -----------------------//
// express route to get every post
router.get("/getPosts", async(req, res) => {
    // ex query: select * from post order by datecreated
    const result = await Posts.findAll({
        order: [
            ['timecreated', 'DESC']
        ]
    })
    res.json(result);
});

// express route to get details from postid
router.get("/getPost/:id", async(req, res) => {
    const id = req.params.id;
    // ex query: select * from post where postid = 1
    const result = await Posts.findAll({
        where: {
            postid: id
        }
    });
    res.json(result);
});

// express route to create a new post
router.post('/createPost', async(req, res) => {
    const tit = req.body.title;
    const aut = req.body.author;
    const loc = req.body.location;
    const bod = req.body.body;
    const tim = req.body.time;
    // ex query: insert into post (title,author,location,body,timecreated,scheduledtime) values (...)
    Posts.create({
        title: tit,
        author: aut,
        location: loc,
        body: bod,
        scheduledtime: Sequelize.literal(`STR_TO_DATE(\"${tim}\", \"%m-%d-%Y %H:%i:%s\")`)
    }).catch(err => {
        console.log(err);
    })
    res.json("created")
});

// express route to delete post
router.post('/deletePost', async(req, res) => {
    const id = req.body.id;
    // need to first delete all comments or there will be an error
    Comments.destroy({where: {post_id: id}}).catch(err => {
        console.log(err);
    });
    // DELETE FROM table_name WHERE ...
    Posts.destroy({where: {postid: id}}).catch(err => {
        console.log(err);
    });
    res.json("deleted")
});

// express route to update post
router.post('/updatePost/', async(req, res) => {
    const id = req.body.id;
    const tit = req.body.title;
    const loc = req.body.location;
    const bod = req.body.body;
    const tim = req.body.time;
    // UPDATE table_name SET ... WHERE ...
    Posts.update({
        title: tit,
        location: loc,
        body: bod,
        scheduledtime: Sequelize.literal(`STR_TO_DATE(\"${tim}\", \"%m-%d-%Y %H:%i:%s\")`)
    }, {where: {postid: id}}).catch(err => {
        console.log(err);
    })
    res.json("updated");
});
//------------------- end API routes for Social Posts ---------------------//

module.exports = router