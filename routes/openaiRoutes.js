const express = require("express");
const { generateImage } = require ('../controllers/openaiController');
const router = express.Router();


router.post('/generateImage', generateImage)

// Set up home route
router.get("/second", (req, res) => {
    res.send("This is the homepage");
});

module.exports = router;