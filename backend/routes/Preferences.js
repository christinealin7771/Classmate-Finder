const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

router.get("/all", async (req, res) =>{
const { Preferences } = require('../models');
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.post("/", async (req, res) => {
    const {year, major, personality, studyHabit, timeStudy} = req.body;
    Preferences.create({
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        timeStudy: timeStudy
    })
    
    res.json("Success");
});

module.exports = router;