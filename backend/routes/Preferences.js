const express = require("express"); 
const router = express.Router(); 

router.get("/", (req, res) => {
    res.json("helloooo world")
});

router.post("/", (req, res) => {
    
});

module.exports = router; 