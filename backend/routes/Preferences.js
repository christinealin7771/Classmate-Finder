const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

<<<<<<< HEAD
router.get("/", async (req, res) =>{
=======
router.get("/all", async (req, res) =>{
const { Preferences } = require('../models');
>>>>>>> manz
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.get("byId/:id", async (req,res) => {
    const id = req.params.id;; 
    const post = await postMessage.findByPK(id); 
    res.json(post); 
}); 

router.post("/", async (req, res) => {
    const {name, year, major, personality, studyHabit, timeStudy} = req.body;
    Preferences.create({
        name: name,
        year: year,
        major: major,
        personality: personality,
        studyHabit: studyHabit,
        timeStudy: timeStudy
    })
    
    res.json("Success");
});

module.exports = router;