const Vote = require('../models/vote');
const { buildOverallScores } = require('../helpers/vote.helper');

async function getTeamOverall(request, response) {
    try {
        const data = await Vote.find({teamId: request.params.teamId});
        const score = buildOverallScores(data, response)

        response.status(200).send(score);
    }
    catch (error) {
        response.status(500).send(error);
    }

}

async function createVote(request, response) {
    const vote = new Vote(request.body);
    try {
        data = await vote.save();
        response.status(200).json(data)
    }
    catch (error) {
        response.status(500).send(error);
    }

}

async function getVotesByTeam(request, response) {
        try{
            data = await Vote.find({teamId: request.params.teamId});
            response.status(200).send(data);
        }
        catch(error){
            response.status(500).send(error);
        }
    
    }

module.exports = { 
    getTeamOverall, 
    createVote, 
    getVotesByTeam
};