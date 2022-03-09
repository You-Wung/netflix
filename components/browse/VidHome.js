import classes from "./VidHome.module.css";
import logo from "../../img/logo.png";
import Image from "next/image";
import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import monsterLogo from "../../img/monsterLogo.png";
import Top10 from "./Top10";
import FirstLine from "./lines/FirstLine";
import SecondLine from './lines/SecondLine'
import ExpModal from "./lines/ExpModal";
import ThirdLine from "./lines/ThirdLine";
import Exp from "../home/Exp";
import LikedContents from "./likedContents/LikedContents";

const HOME = "home";
const LIKED_CONTENTS = "liked_contents"

const VidHome = (props) => {
	const router = useRouter();
	const [vidValid, setVidValid] = useState(false);
	const [replayClicked, setReplayClicked] = useState(false);
	const [state, setState] = useState(HOME);//home or liked contents
  const [modalInfo, setModalInfo] = useState("");

	const modalOpen = (//몬스터주식회사
		info = {
			year: "2001",
			age: "all",
			time: "1h32m",
			url: "https://youtu.be/GhFS3H2ejNA",
		}
	) => {
		setModalInfo(info);
		setReplayClicked(true);
	};
	const closeModal = () => {setReplayClicked(false)};

	useEffect(() => {
		setTimeout(() => {
			setVidValid(true);
		}, 2000);
		setTimeout(() => {
			setVidValid(false);
		}, 32000);
	}, []);

	const replayHandler = () => {
		setVidValid((prev) => {
			if (!prev) {
				setTimeout(() => {
					setVidValid(false);
				}, 30000);
				return true;
			}
		});
	};

	const homeJSX = (
		<Fragment>
			<div className={classes.main}>
				{!vidValid && <div className={classes.background} />}
				{vidValid && (
					<video className={classes.backgroundForVid} autoPlay muted>
						<source src="/monster_inc.mp4" />
					</video>
				)}
				<div className={classes.banner}>
					<Image src={monsterLogo} alt="" />
					<p>
						Lovely Sulli and her witty friend Mike are the best combination of
						the scaring team in Monster Inc. Shirley and Mike must send the girl
						back to the girls house unnoticed, as those who work at gathering
						energy from screaming accidentally bring a cute little girl named
						Boo into their world!
					</p>
					<button
						onClick={(e) => {
							modalOpen();
						}}
					>
						Details
					</button>
					<button onClick={replayHandler} style={{ marginLeft: "20px" }}>
						Replay
					</button>
				</div>
				<Top10 modalOpen={modalOpen} />
				<div className={classes.gradation} />
			</div>
			<FirstLine modalOpen={modalOpen} />
			<SecondLine modalOpen={modalOpen} />
			<ThirdLine modalOpen={modalOpen} />
		</Fragment>
	);

	return (
		<div style={{paddingBottom: "5rem"}}>
			{replayClicked && <ExpModal closeModal={closeModal} info={modalInfo} />}
			<div className={classes.nav}>
				<div className={classes.logo}>
					<Image onClick={e=>{router.push('/browse')}} src={logo} alt="" />
				</div>
				<div className={classes.menu}>
					<button onClick={e=>{setState(HOME)}}>Home</button>
					<button onClick={e=>{setState(LIKED_CONTENTS)}}>Liked Contents</button>
				</div>
				<div className={classes.signout}>
					<button onClick={props.signoutHandler}>Sign out</button>
				</div>
			</div>
			{state === HOME && homeJSX}
			{state === LIKED_CONTENTS && <LikedContents signoutHandler={props.signoutHandler} modalOpen={modalOpen}/>}
			<br/>
			<Exp />
		</div>
	);
};

export default VidHome;
