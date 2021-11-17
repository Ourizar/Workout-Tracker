const router = require("express").Router();
const path = require('path');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.post('/exercise', (req, res) => {
    
});

module.exports = router;