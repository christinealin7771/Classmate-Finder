const express = require('express')
const router = express.Router()
const { Preferences } = require('../models');

router.get("/", async (req, res) =>{
const { Preferences } = require('../models');
    const listOfPreferences = await Preferences.findAll()
    res.json(listOfPreferences);
});

router.post("/", async (req, res) => {
    const preference = req.body
    await Preferences.create(preference);
    res.json(preference);
});

module.exports = router;