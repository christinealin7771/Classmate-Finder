const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

router.get("/", async (req, res) =>{
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.get("byId/:id", async (req,res) => {
    const id = req.params.id;; 
    const post = await postMessage.findByPK(id); 
    res.json(post); 
}); 

router.post("/", async (req, res) => {
    const {username, name, year, major, personality, studyHabit, timeStudy} = req.body;
    Preferences.create({
        username: username, 
        name: name,
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        timeStudy: timeStudy
    })
    
    res.json("Success");
});

router.put('/updatePreference', async (req, res) => {
    const {username, name, year, major, personality, studyHabit, timeStudy} = req.body;
    Preferences.update({
        name: name,
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        timeStudy: timeStudy
    }, {where: {name: req.username.username}})
})

module.exports = router;