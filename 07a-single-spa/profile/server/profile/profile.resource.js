const express = require('express');
const router = express.Router();
const profileService = require('./profile.service');


router.get('/profile', (req, res) => {
    const currentUser = profileService.findUser(req.query.id);
    res.send(currentUser);
});

module.exports = router;
