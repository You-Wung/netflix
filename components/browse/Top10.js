import classes from "./Top10.module.css";
import React, { useState } from "react";
import Image from "next/image";

import pic1 from "../../img/rank_poster/1.jpeg";
import h_pic1 from '../../img/third_line/6.webp';

import pic2 from "../../img/rank_poster/2.jpeg";
import h_pic2 from '../../img/first_line/4.webp';

import pic3 from "../../img/rank_poster/3.jpeg";
import h_pic3 from '../../img/first_line/5.webp';

import pic4 from "../../img/rank_poster/4.jpeg";
import h_pic4 from '../../img/first_line/8.webp';

import pic5 from "../../img/rank_poster/5.jpeg";
import h_pic5 from '../../img/third_line/1.webp';

import pic6 from "../../img/rank_poster/6.jpeg";
import h_pic6 from '../../img/first_line/12.webp';

import pic7 from "../../img/rank_poster/7.jpeg";
import h_pic7 from '../../img/first_line/11.webp';

import pic8 from "../../img/rank_poster/8.jpeg";
import h_pic8 from '../../img/third_line/8.webp';

import pic9 from "../../img/rank_poster/9.jpeg";
import h_pic9 from '../../img/first_line/3.webp';

import pic10 from "../../img/rank_poster/10.jpeg";
import h_pic10 from '../../img/first_line/1.webp';

const info = [
	{},
	{num: 1, line: 0, year: "2003", age: "18+", time: "2h", url:"https://youtu.be/2sw4svjRe_I", pic: h_pic1 },
	{num: 2, line: 0, year: "2012", age: "15+", time: "2h37m", url: 'https://youtu.be/YmvHzCLP6ug', pic: h_pic2 },
	{num: 3, line: 0, year: "1998", age: "12+", time: "1h43m", url: 'https://youtu.be/dlnmQbPGuls', pic: h_pic3 },
	{num: 4, line: 0, year: "1999", age: "12+", time: "2h16m", url:"https://youtu.be/9ix7TUGVYIo", pic: h_pic4 },
	{num: 5, line: 0, year: "2019", age: "15+", time: "2h11m", url: 'https://youtu.be/jBdRhhSt3Bc', pic: h_pic5 },
	{num: 6, line: 0, year: "1997", age: "all", time: "2h14m", url:"https://youtu.be/4OiMOHRDs14", pic: h_pic6 },
	{num: 7, line: 0, year: "2015", age: "12+", time: "2h1m", url:"https://youtu.be/thv8myYCUQE", pic: h_pic7 },
	{num: 8, line: 0, year: "2016", age: "18+", time: "1h57m", url:"https://youtu.be/UOTOjA0ngmk", pic: h_pic8 },
	{num: 9, line: 0, year: "2015", age: "12+", time: "2h1m", url:"https://youtu.be/thv8myYCUQE", pic: h_pic9 },
	{num: 10, line: 0, year: "2002", age: "all", time: "2h5m", url: 'https://youtu.be/ByXuk9QqQkk', pic: h_pic10 },
];

const Top10 = (props) => {
	const [nextBtn, setNextBtn] = useState(false);

	const nextBtnHandler = () => {
		setNextBtn(prev => !prev);
	};

	return (
		<div className={classes.main}>
			<div className={classes.Top10}>
				<h1>Top 10</h1>
			</div>
			<div className={classes.onCon}>
				{nextBtn === false && (<button onClick={nextBtnHandler} className={classes.rightBtn}>〉</button>)}
				{nextBtn === true && (<button onClick={nextBtnHandler} className={classes.leftBtn}>〈</button>)}
				<div className={`${classes.slider} ${nextBtn ? classes.next : ""}`}>
					<div className={classes.con}>
						<h1>1</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[1])}} src={pic1} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>2</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[2])}} src={pic2} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>3</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[3])}} src={pic3} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>4</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[4])}} src={pic4} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>5</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[5])}} src={pic5} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>6</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[6])}} src={pic6} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>7</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[7])}} src={pic7} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>8</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[8])}} src={pic8} alt="" />
						</div>
					</div>
					<div className={classes.con}>
						<h1>9</h1>
						<div className={classes.rank}>
							<Image onClick={e=>{props.modalOpen(info[9])}} src={pic9} alt="" />
						</div>
					</div>
					<div className={classes.con10}>
						<h1>10</h1>
						<div className={classes.rank10}>
							<Image onClick={e=>{props.modalOpen(info[10])}} src={pic10} alt="" />
						</div>
					</div>
				</div>
				{/*</div>*/}
			</div>
		</div>
	);
};

export default Top10;
