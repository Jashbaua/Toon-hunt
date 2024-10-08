let time = 0;
let interval;
export default {
	getTime: (callback) => {
		callback(time);
	},
	stopTimer: () => {
		clearInterval(interval);
		time = 0;
	},
	startTimer: () => {
		interval = setInterval(() => time++, 1000);
	},
	addScore: (name, timeTaken) => {
		fetch(`${import.meta.env.VITE_SERVER_URL}/insert`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, timeTaken }),
		});
	},
    async getData() {
        let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/leaderboard`)
        let data = await response.json()
        data = data.map((score, index) => ({...score,rank:index+1}))
        return data
    },
};
