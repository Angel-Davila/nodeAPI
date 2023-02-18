const Vote = require('../models/vote');
const Score = require('../models/score');

async function getTeamOverall(request, response) {
    let score = Score;
    score.commentaries = [];
    let gameplayOverall = 0;
    let musicOverall = 0;
    let designOverall = 0;
    let storyOverall = 0;
    let difficultyOverall = 0;
    try {
        data = await Vote.find({teamId: request.params.teamId});
        for (const vote of data) {
            gameplayOverall = gameplayOverall + vote.gameplay;
            musicOverall = musicOverall + vote.music;
            designOverall = designOverall + vote.design;
            storyOverall = storyOverall + vote.story;
            difficultyOverall = difficultyOverall + vote.difficulty;
            if (vote.commentary) {
                score.commentaries.push(vote.commentary);

            }

        }
        score.teamId = data.teamId;
        score.gameplay = (gameplayOverall / data.length);
        score.music = (musicOverall / data.length);
        score.design = (designOverall / data.length);
        score.story = (storyOverall / data.length);
        score.difficulty = (difficultyOverall / data.length);
        score.overallScore = (score.gameplay + score.music + score.design + score.story + score.difficulty) / 5;

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