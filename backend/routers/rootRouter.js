const { Router } = require("express");
const db = require('../prisma/queries');
const rootController=require('../controllers/rootController')

const rootRouter = Router();

rootRouter.post("/insert", rootController.postLeaderboard);
rootRouter.get("/leaderboard", rootController.getLeaderboard);

module.exports = rootRouter;