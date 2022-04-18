const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

router.get("/all", async (req, res) =>{
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.get("/:userId", async (req,res) => {
    const userId = req.params.userId;
    const preferences = await Preferences.findAll({where: {UserId: userId}})
    //const preferences = await Preferences.findByPk(id)

    res.json(preferences)
})

router.post("/", async (req, res) => {
    const {name, year, major, personality, studyHabit, studyTime, UserId} = req.body;
    // const username = 
    
    Preferences.create({
        name: name,
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        studyTime: studyTime,
        UserId: UserId
    })
    
    res.json("Success");
});

router.put('/updatePreference', async (req, res) => {
    const {name, year, major, personality, studyHabit, studyTime, UserId} = req.body;
    Preferences.update({
        name: name,
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        studyTime: studyTime,
        UserId: UserId
    }, {where: {UserId: UserId}})

    res.json("Success")
})
// router.put('/updatePreference', async (req, res) => {
//     const preference = req.body;
//     Preferences.update(preference, {where: {username: req.user.username}})

//     res.json(preference)
// })

module.exports = router;