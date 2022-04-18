const express = require("express");
var Sequelize = require('sequelize');
const router = express.Router()
const {Chatrooms, Messages} = require("../models")

//------------- API routes for Group-Group & Private Chats ---------------//
// express route to get chatroom name
router.get('/getTitle/:chatID', async(req, res) => {
    const id = req.params.chatID;

    const result = await Chatrooms.findByPk(id, {
        attributes: ['users']
    })
    res.json(result);
});


// express route to get all chatrooms from name
router.get("/getChatsFromName/:name", async(req, res) => {
    const name = req.params.name;

    const result = await Chatrooms.findAll({
        where: {
            users: {[Sequelize.Op.like]: `%${name}%`}
        }
    })
    res.json(result);
});

// express route to get all messages from chatid
router.get("/getMessagesFromID/:id", async(req, res) => {
    const id = req.params.id;
    // ex query: select * from messages where chatroom_id = 1 order by timestamp
    const result = await Messages.findAll({
        where: {
            chatroom_id: id
        },
        order: [
            ['timestamp', 'DESC']
        ]
    })
    res.json(result);
});

// express route to create a new chatroom with users
router.post('/createRoom', async(req, res) => {
    const users = req.body.usersList;
    // ex query: insert into chatrooms (users) values ('nicholas, manning, sabrina, christine')
    Chatrooms.create({
        users: users
    }).catch(err => {
        console.log(err);
    })
    res.json("success")
});

// express route to update room
router.post('/updateRoom/', async(req, res) => {
    const id = req.body.chatID;
    const user = req.body.userName;
    // UPDATE table_name SET ... WHERE ...
    Chatrooms.update({
        users: user
    }, {where: {chatid: id}}).catch(err => {
        console.log(err);
    })
    res.json("success")
});

// express route to create a new message with username and chatid
router.post('/createMessage', async(req, res) => {
    const user = req.body.userName;
    const msg = req.body.message;
    const chatid = req.body.chatID;
    // ex query: insert into messages (username, message, timestamp, chatroom_id) values ('routerle', 'hello my name bob', CURRENT_TIME(), 2)
    Messages.create({
        username: user,
        message: msg,
        chatroom_id: chatid
    }).catch(err => {
        console.log(err);
    })
    res.json("success")
});
//----------- end API routes for Group-Group & Private Chats --------------//

module.exports = router