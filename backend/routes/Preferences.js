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
    const preference = req.body
    await Preferences.create(preference);
    res.json(preference);
});

module.exports = router;