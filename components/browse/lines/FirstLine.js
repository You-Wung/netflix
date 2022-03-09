import React, { Fragment, useState } from "react";
import classes from "./FirstLine.module.css";
import Image from "next/image";
import { Transition } from "react-transition-group";
import pic1 from "../../../img/first_line/1.webp";
import pic2 from "../../../img/first_line/2.webp";
import pic3 from "../../../img/first_line/3.webp";
import pic4 from "../../../img/first_line/4.webp";
import pic5 from "../../../img/first_line/5.webp";
import pic6 from "../../../img/first_line/6.webp";
import pic7 from "../../../img/first_line/7.webp";
import pic8 from "../../../img/first_line/8.webp";
import pic9 from "../../../img/first_line/9.webp";
import pic10 from "../../../img/first_line/10.webp";
import pic11 from "../../../img/first_line/11.webp";
import pic12 from "../../../img/first_line/12.webp";
import MouseOver from "./MouseOver";

const info = [
	{},
	{line: 1, num: 1, year: "2002", age: "all", time: "2h5m", url: 'https://youtu.be/ByXuk9QqQkk', pic: pic1 },
	{line: 1, num: 2, year: "2004", age: "15+", time: "1h37m", url: 'https://youtu.be/oDU84nmSDZY', pic: pic2 },
	{line: 1, num: 3, year: "2013", age: "15+", time: "2h3m", url: 'https://youtu.be/T7A810duHvw', pic: pic3 },
	{line: 1, num: 4, year: "2012", age: "15+", time: "2h37m", url: 'https://youtu.be/YmvHzCLP6ug', pic: pic4 },
	{line: 1, num: 5, year: "1998", age: "12+", time: "1h43m", url: 'https://youtu.be/dlnmQbPGuls', pic: pic5 },
	{line: 1, num: 6, year: "1999", age: "12+", time: "2h3m", url:"https://youtu.be/h_daSz5FZYs", pic: pic6 },
	{line: 1, num: 7, year: "2005", age: "all", time: "1h54m", url:"https://youtu.be/OFVGCUIXJls", pic: pic7 },
	{line: 1, num: 8, year: "1999", age: "12+", time: "2h16m", url:"https://youtu.be/9ix7TUGVYIo", pic: pic8 },
	{line: 1, num: 9, year: "2016", age: "12+", time: "2h7m", url:"https://youtu.be/0pdqf4P9MB8", pic: pic9 },
	{line: 1, num: 10, year: "2005", age: "all", time: "1h26m", url:"https://youtu.be/orAqhC-Hp_o", pic: pic10 },
	{line: 1, num: 11, year: "2015", age: "12+", time: "2h1m", url:"https://youtu.be/thv8myYCUQE", pic: pic11 },
	{line: 1, num: 12, year: "1997", age: "all", time: "2h14m", url:"https://youtu.be/4OiMOHRDs14", pic: pic2 },
];

const FirstLine = (props) => {
	const [nextBtn, setNextBtn] = useState(false);
	const [over, setOver] = useState(0);

	const nextBtnHandler = () => {
		setNextBtn(prev => !prev);
	};

	const overHandler = (id, e) => {
		setOver(id);
	};

	const leaveHandler = (e) => {
		setOver(0);
	};

	const transitionWithNum = (picNum) => {
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
						info={info[picNum]}
					/>
				)}
			</Transition>
		);
	};

	const firstFrontBox_ClassName = `${classes.box} ${over === 6 ? classes.frontbox : ""}`;
	const secondFrontBox_ClassName = `${classes.box} ${over === 12 ? classes.frontbox : ""}`;
	return (
		<Fragment>
			<div className={classes.main}>
				<h1 style={{ paddingLeft: "3rem", zIndex: "-1" }}>Hot Movies</h1>
				<div className={classes.onCon}>
					{nextBtn === false && <button onClick={nextBtnHandler} className={classes.rightBtn}>〉</button>}
					{nextBtn === true && <button onClick={nextBtnHandler} className={classes.leftBtn}>〈</button>}
					<div className={`${classes.con} ${nextBtn ? classes.next : ''}`}>
						<div className={firstFrontBox_ClassName} onMouseOver={e=>{overHandler(1, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic1} alt="" />
							{transitionWithNum(1)}
						</div>
						<div className={firstFrontBox_ClassName} onMouseOver={e=>{overHandler(2, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic2} alt="" />
							{transitionWithNum(2)}
						</div>
						<div className={firstFrontBox_ClassName} onMouseOver={e=>{overHandler(3, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic3} alt="" />
							{transitionWithNum(3)}
						</div>
						<div className={firstFrontBox_ClassName} onMouseOver={e=>{overHandler(4, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic4} alt="" />
							{transitionWithNum(4)}
						</div>
						<div className={firstFrontBox_ClassName} onMouseOver={e=>{overHandler(5, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic5} alt="" />
							{transitionWithNum(5)}
						</div>
						<div className={`${classes.box} ${classes.lastbox}`} onMouseOver={e=>{overHandler(6, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic6} alt="" />
							{transitionWithNum(6)}	
						</div>
						<div className={secondFrontBox_ClassName} onMouseOver={e=>{overHandler(7, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic7} alt="" />
							{transitionWithNum(7)}
						</div>
						<div className={secondFrontBox_ClassName} onMouseOver={e=>{overHandler(8, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic8} alt="" />
							{transitionWithNum(8)}
						</div>
						<div className={secondFrontBox_ClassName} onMouseOver={e=>{overHandler(9, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic9} alt="" />
							{transitionWithNum(9)}
						</div>
						<div className={secondFrontBox_ClassName} onMouseOver={e=>{overHandler(10, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic10} alt="" />
							{transitionWithNum(10)}
						</div>
						<div className={secondFrontBox_ClassName} onMouseOver={e=>{overHandler(11, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic11} alt="" />
							{transitionWithNum(11)}
						</div>
						<div className={`${classes.box} ${classes.lastbox}`} onMouseOver={e=>{overHandler(12, e)}} onMouseLeave={leaveHandler}>
							<Image src={pic12} alt="" />
							{transitionWithNum(12)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default FirstLine;
