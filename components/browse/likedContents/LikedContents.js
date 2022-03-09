import classes from './LikedContents.module.css';
import Image from 'next/image';
import { Transition } from "react-transition-group";
import React, { useState, Fragment, useEffect } from 'react';
import MouseOver from "../lines/MouseOver";
import { getDatabase, ref, onValue } from "firebase/database";

const FULL = 6;

const LikedContents = (props) => {
	const [likedList, setLikedList] = useState(null);
	const [over, setOver] = useState(0);
	const db = getDatabase();
	const id = localStorage.getItem('id');

	let boxAmount = 0;
	for (let l in likedList)
		boxAmount++;
	if (!id)
		props.signoutHandler();

	useEffect(() => {
		const dbWithID = ref(db, 'save/' + id);
		onValue(dbWithID, (snapshot) => {
			setLikedList(snapshot.val()); 
			//for in 써서 imageJSX에 뭉쳐보자
		})}, [db, id]);

	const overHandler = (id, e) => {
		console.log(`set Over as ${id}`);
		setOver(id);
	};

	const leaveHandler = (e) => {
		setOver(0);
	};

	const transitionWithNum = (picNum, info) => {
		const transitionStyles = {
			entering: { maxHeight: "0", overflow: "hidden" },
			entered: { maxHeight: "50px" },
			exiting: { maxHeight: "50px" },
			exited: { maxHeight: "0" },
		};
		return (
			<Transition
				in={over === picNum}
				timeout={100}
				//mountOnEnter
				//unmountOnExit
			>
				{(state) => (
					<MouseOver
						style={{
							transition: "all .5s ease",
							...transitionStyles[state],
						}}
						modalOpen={props.modalOpen}
						info={info}
					/>
				)}
			</Transition>
		);
	};
	
	const LoadImage = (amountOnLine, startPoint) => {
		if (!likedList)
			return ;
		let ImageJSX = [];
		const values = Object.values(likedList);
		const keys = Object.keys(likedList);
		//포문안에 i 를 포문위에서 선언해보자.

		for (let i=startPoint; i<values.length && i<amountOnLine; i++) {
			const info = values[i];
			ImageJSX.push(//에러. i를 키로 바꾸어보자.
				<div
					style={{ width: (7 - amountOnLine * 16.666).toString() + "%" }}
					className={classes.box}
					onMouseOver={(e) => {
						overHandler(i+1, e);
					}}
					onMouseLeave={leaveHandler}
					key={keys[i]}
				>
					<Image src={info.pic} alt="" />
					{transitionWithNum(i+1, info)}
				</div>
			);
		}
		return ImageJSX;
	};
	
	const list_according_box_amount = (condition) => {
		const overLine = condition + 6; 
		return (
			<div
					style={{ width: ((boxAmount > overLine ? FULL : boxAmount - condition) * 16).toString() + "%" }}
					className={classes.main}
				>
					<div className={classes.onCon}>
						<div className={classes.con}>{LoadImage(boxAmount > overLine ? overLine : boxAmount, condition)}</div>
					</div>
				</div>
		);
	};

	return (
		<Fragment>
			{boxAmount === 0 && <div style={{margin: "0 auto", textAlign: "center", color: "white"}}><h1>You have not liked anything.</h1></div>}
			{boxAmount !== 0 && (
				<div
					style={{
						width: ((boxAmount > 6 ? FULL : boxAmount) * 16).toString() + "%",
					}}
					className={classes.main}
				>
					<div className={classes.onCon}>
						<div className={classes.con}>
							{LoadImage(boxAmount > 6 ? FULL : boxAmount, 0)}
						</div>
					</div>
				</div>
			)}
			{boxAmount > 6 && list_according_box_amount(6)}
			{boxAmount > 12 && list_according_box_amount(12)}
			{boxAmount > 18 && list_according_box_amount(18)}
			{boxAmount > 24 && list_according_box_amount(24)}
			{boxAmount > 30 && list_according_box_amount(30)}
			{boxAmount > 36 && list_according_box_amount(36)}
			<br />
			<br />
			<br />
			<br />
			<br />
		</Fragment>
	);
};

export default LikedContents;