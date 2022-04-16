const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

router.get("/", async (req, res) =>{
const { Preferences } = require('../models');
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.post("/", async (req, res) => {
    const {year, major, pType, studyHabbits, studyTime} = req.body;
    Preferences.create({
        year: year,
        major: major,
        pType: pType,
        studyHabbits: studyHabbits,
        studyTime: studyTime
    })
    
    res.json("Success");
});

module.exports = router;