import React, { Fragment, useState } from "react";
import classes from "./FirstLine.module.css";
import Image from "next/image";
import { Transition } from "react-transition-group";
import pic1 from "../../../img/second_line/1.webp";
import pic2 from "../../../img/second_line/2.jpeg";
import pic3 from "../../../img/second_line/3.jpeg";
import pic4 from "../../../img/second_line/4.jpeg";
import pic5 from "../../../img/second_line/5.webp";
import pic6 from "../../../img/second_line/6.jpeg";
import pic7 from "../../../img/second_line/7.jpeg";
import pic8 from "../../../img/second_line/8.jpeg";
import pic9 from "../../../img/second_line/9.jpeg";
import pic10 from "../../../img/second_line/10.webp";
import pic11 from "../../../img/second_line/11.jpeg";
import pic12 from "../../../img/second_line/12.jpeg";
import MouseOver from "./MouseOver";

const info = [
	{},
	{line: 2, num: 1, year: "1994", age: "15+", time: "10S", url: 'https://youtu.be/HZlx7yrDu3c', pic: pic1 },
	{line: 2, num: 2, year: "2020", age: "18+", time: "4S", url: 'https://youtu.be/9QxRbzFk3zk', pic: pic2 },
	{line: 2, num: 3, year: "2020", age: "18+", time: "3S", url: 'https://youtu.be/2JgPJpgnut4', pic: pic3 },
	{line: 2, num: 4, year: "2020", age: "18+", time: "2S", url: 'https://youtu.be/ndl1W4ltcmg', pic: pic4 },
	{line: 2, num: 5, year: "2016", age: "15+", time: "5S", url: 'https://youtu.be/rrGxl-jlAMc', pic: pic5 },
	{line: 2, num: 6, year: "2020", age: "18+", time: "2S", url:"https://youtu.be/OYfx2nFQodY", pic: pic6 },
	{line: 2, num: 7, year: "2013", age: "18+", time: "7S", url:"https://youtu.be/vY0qzXi5oJg", pic: pic7 },
	{line: 2, num: 8, year: "2018", age: "18+", time: "3S", url:"https://youtu.be/ga1m0wjzscU", pic: pic8 },
	{line: 2, num: 9, year: "2017", age: "18+", time: "4S", url:"https://youtu.be/QkT-HIMSrRk", pic: pic9 },
	{line: 2, num: 10, year: "2012", age: "15+", time: "6S", url:"https://youtu.be/eCg1RN-dyQk", pic: pic10 },
	{line: 2, num: 11, year: "2018", age: "18+", time: "1S", url:"https://youtu.be/CkTaQ9VO-HA", pic: pic11 },
	{line: 2, num: 12, year: "2022", age: "15+", time: "1S", url:"https://youtu.be/b39SWaVQUoI", pic: pic12 },
];

const SecondLine = (props) => {
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
				<h1 style={{ paddingLeft: "3rem", zIndex: "-1" }}>TV shows</h1>
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

export default SecondLine;
