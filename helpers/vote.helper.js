const Score = require('../models/score');

function buildOverallScores(data) {
    let score = Score;
    score.commentaries = [];
    let gameplayOverall = 0;
    let musicOverall = 0;
    let designOverall = 0;
    let storyOverall = 0;
    let difficultyOverall = 0;  
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
    return score;
}

module.exports = { buildOverallScores };