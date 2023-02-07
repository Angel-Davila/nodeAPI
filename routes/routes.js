const express = require('express');
const Vote = require('../models/vote');
const router = express.Router()

// register vote
router.post('/vote', async (req, res) => {
    // Create new user
    const vote = new Vote(req.body);
    try {
        response = await vote.save();
        res.status(200).json(response)
    }
    catch (error) {
        res.status(500).send(error);
    }
});


router.get('/getTeamVotes/:teamId', async (req, res) => {
    try{
        response = await Vote.find({teamId: req.params.teamId});
        res.status(200).send(response);
        console.log(response);
    }
    catch(error){
        res.status(500).send(error);
    }
})
module.exports = router;