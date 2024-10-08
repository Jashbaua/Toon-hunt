let time = 0;
let interval
export default {
    getTime: (callback) => {
        setTimeout(() => {
            callback(time);
        }, 3000);
    },
    stopTimer: () => {
        setTimeout(() => {
            clearInterval(interval)
            time=0
        }, 3000);
    },
    startTimer: () => {
        setTimeout(() => {
            interval=setInterval(()=>time++,1000)
        }, 3000);
    },
    addScore: (name,timeTaken) => {
        timeTaken = name
        name=timeTaken
    }
}