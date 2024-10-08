const asyncHandler = require("express-async-handler");
const db=require("../prisma/queries")
module.exports = {
    postLeaderboard: (req, res) => {
        let { name, timeTaken } = req.body
        db.insertScore(name,timeTaken)
        res.send();
    },
    getLeaderboard: asyncHandler(async (req, res) => {
        let leaderboard = await db.getLeaderboard()
        res.json(leaderboard)
    }),
};
