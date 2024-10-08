import fullimage from "../assets/fullimage.jpg";
import { useState,useRef } from "react";
import styles from "./Main.module.css";
import PropTypes from 'prop-types';

export default function Main({ finisher }) {
	const divRef = useRef(null);
	const dropRef = useRef(null);
	let [normalizedX,setNormalizedX]=useState(null)
	let [normalizedY,setNormalizedY]=useState(null)

	function clickHandler(e) {
		let rect = e.target.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setNormalizedX((1000 * x) / e.target.offsetWidth);
		setNormalizedY((1000 * y) / e.target.offsetHeight);
		const div = divRef.current;
		const drop = dropRef.current;

		div.style.left = `${x - div.offsetWidth / 2}px`;
		div.style.top = `${y - div.offsetWidth / 2}px`;

		let dropOverflowX = Math.max(
			0,
			x + div.offsetWidth / 2 + drop.offsetWidth - rect.right
		);
		let dropOverflowY = Math.max(
			0,
			Math.max(
				y + div.offsetHeight / 2 + drop.offsetHeight - rect.bottom,
				y +
					rect.top +
					div.offsetHeight / 2 +
					drop.offsetHeight -
					window.innerHeight
			)
		);
		if (dropOverflowX > 0) {
			drop.style.left = `${x - div.offsetWidth / 2 - drop.offsetWidth}px`;
		} else {
			drop.style.left = `${x + div.offsetWidth / 2 - dropOverflowX}px`;
		}
		if (dropOverflowY > 0) {
			drop.style.top = `${y - div.offsetWidth / 2 - drop.offsetHeight}px`;
		} else {
			drop.style.top = `${y + div.offsetWidth / 2 - dropOverflowY}px`;
		}

		divRef.current.classList.remove(styles.wrongAnimate);
		div.classList.remove(styles.hideAnimate);
		div.classList.remove(styles.animate);
		void div.offsetWidth; // Trigger reflow to restart animation
		div.classList.add(styles.animate);

		drop.classList.remove(styles.hideAnimate);
		drop.classList.remove(styles.animate);
		void drop.offsetWidth; // Trigger reflow to restart animation
		drop.classList.add(styles.animate);
	}
	function clickSelect() {
		divRef.current.classList.remove(styles.wrongAnimate);
		divRef.current.classList.remove(styles.animate);
		divRef.current.classList.remove(styles.hideAnimate);
		void divRef.current.offsetWidth; // Trigger reflow to restart animation
		divRef.current.classList.add(styles.hideAnimate);

		dropRef.current.classList.remove(styles.animate);
		dropRef.current.classList.remove(styles.hideAnimate);
		void dropRef.current.offsetWidth; // Trigger reflow to restart animation
		dropRef.current.classList.add(styles.hideAnimate);
	}
	function clickList(e) {
		if (e.target.nodeName == "LI") {
			if (valid(normalizedX, normalizedY, e.target.textContent)) {
				if (e.target.parentElement.childElementCount == 1) finisher(true);
				divRef.current.classList.remove(styles.wrongAnimate);
				divRef.current.classList.remove(styles.animate);
				divRef.current.classList.remove(styles.hideAnimate);
				void divRef.current.offsetWidth; // Trigger reflow to restart animation
				divRef.current.classList.add(styles.hideAnimate);

				dropRef.current.classList.remove(styles.animate);
				dropRef.current.classList.remove(styles.hideAnimate);
				void dropRef.current.offsetWidth; // Trigger reflow to restart animation
				dropRef.current.classList.add(styles.hideAnimate);
				e.target.remove();
			} else {
				divRef.current.classList.remove(styles.wrongAnimate);
				divRef.current.classList.remove(styles.animate);
				divRef.current.classList.remove(styles.hideAnimate);
				void divRef.current.offsetWidth; // Trigger reflow to restart animation
				divRef.current.classList.add(styles.wrongAnimate);

				dropRef.current.classList.remove(styles.animate);
				dropRef.current.classList.remove(styles.hideAnimate);
				void dropRef.current.offsetWidth; // Trigger reflow to restart animation
				dropRef.current.classList.add(styles.hideAnimate);
			}
		}
	}
	return (
		<main className={styles.main}>
			<div ref={divRef} className={styles.select} onClick={clickSelect}></div>
			<div ref={dropRef} className={styles.drop}>
				<ul role="list" onClick={clickList}>
					<li>Ben10</li>
					<li>Scrooge</li>
					<li>PinkPanther</li>
					<li>Simpson</li>
				</ul>
			</div>
			<img
				src={fullimage}
				alt="fullimage"
				className={styles.image}
				onClick={clickHandler}
			/>
		</main>
	);
}
Main.propTypes = {
	finisher: PropTypes.func,
  };
function valid(x, y, name) {
	if (
		x > 255.7041 &&
		y > 494.8962 &&
		x < 276.9472 &&
		y < 576.727 &&
		name == "Ben10"
	) {
		return true;
	}
	if (
		x > 853.6585 &&
		y > 415.8394 &&
		x < 878.0487 &&
		y < 489.3484 &&
		name == "Scrooge"
	) {
		return true;
	}
	if (
		x > 312.3524 &&
		y > 182.8297 &&
		x < 340.6766 &&
		y < 213.3428 &&
		name == "PinkPanther"
	) {
		return true;
	}
	if (
		x > 1.5735 &&
		y > 338.1695 &&
		x < 43.273 &&
		y < 393.648 &&
		name == "Simpson"
	) {
		return true;
	}
	return false;
}
