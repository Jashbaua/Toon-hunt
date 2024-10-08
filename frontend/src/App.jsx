import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState, useRef, useEffect } from "react";
import api from "./apiHandler";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate=useNavigate()
	const [isFinished, setIsFinished] = useState(false);
	const [timer, setTimer] = useState(0);
	const endDialogRef = useRef(null);
	const startDialogRef = useRef(null);
	const nameRef = useRef(null);
	const [isRunning, setIsRunning] = useState(false);
	const [endTime, setEndTime] = useState(null);

	const handleKeyDown = (e) => {
		if (e.key !== "Escape") return;
		e.preventDefault();
	};

	function handlePlay() {
		startDialogRef.current.close();
		api.startTimer();
		setIsRunning(true);
		setIsFinished(false);
  }
	function handleSubmit(e) {
	  if(nameRef.current.value=='')return
    e.preventDefault()
    api.addScore(nameRef.current.value, endTime)
    navigate('leaderboard')
  }
	useInterval(
		() => {
			api.getTime(setTimer);
		},
		isRunning ? 200 : null
	);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		startDialogRef.current.showModal();
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);
	useEffect(() => {
		async function endGame() {
			if (isFinished) {
				api.getTime(setTimer);
				endDialogRef.current.showModal();
				api.stopTimer();
				setEndTime(timer);
			}
		}
		endGame();
	}, [isFinished]);
	return (
		<>
			<dialog ref={startDialogRef} className="startDialog">
				<p>
					<b>Toon Hunt Game</b> <br /> The rules are simple: <br />
					Once you will have clicked on the Play button, a timer will start.{" "}
					<br /> Find the characters on top in the shortest possible time.{" "}
					<br />
					When you find a character, click on its position on the image and
					select it from the list that will open.
				</p>
				<button onClick={handlePlay}>Play</button>
			</dialog>
			<Header timer={timer}></Header>
			<Main finisher={setIsFinished}></Main>
			<dialog ref={endDialogRef} className="endDialog">
				<label htmlFor="name">Name: </label>
				<input type="text" ref={nameRef} id="name" required/>
          <p>Time taken</p>
          <p>{endTime+'s'}</p>
          <button onClick={handleSubmit}>Leaderboard</button>
			</dialog>
		</>
	);
}

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

export default App;
