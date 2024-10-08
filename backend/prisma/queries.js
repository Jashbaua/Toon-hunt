const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = {
    async insertScore(name, timeTaken) {
        const result = await prisma.leaderboard.create({
            data: {
                name:name,
                time_taken:timeTaken // Ensure this matches your schema
            }
        })
    },
    async getLeaderboard() {
        return await prisma.leaderboard.findMany({
            orderBy: {
                time_taken: 'asc'
            }
        })
    }
}