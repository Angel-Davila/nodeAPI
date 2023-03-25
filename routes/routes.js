const express = require('express');
const router = express.Router()
const votesService = require('../services/vote.services');

router.post('/vote', async (req, res) => {
    await votesService.createVote(req, res);
});

router.get('/getTeamVotes/:teamId', async (req, res) => {
    await votesService.getVotesByTeam(req, res);

})

router.get('/getTeamOverall/:teamId', async (req, res) => {
    votesService.getTeamOverall(req, res);
});

module.exports = router;