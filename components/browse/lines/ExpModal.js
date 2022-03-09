import classes from './ExpModal.module.css';
import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player/youtube';
import { getDatabase, ref, set, onValue } from "firebase/database";
const ExpModal = (props) => {
	const [saveOK, setSaveOK] = useState();
	const top = props.topIndex;
	const info = props.info;
	const id = localStorage.getItem('id');
	const db = getDatabase();

	useEffect(() => {
		const name = info.line.toString() + "_" + info.num.toString();

		const alreadyLiked = ref(db, 'save/' + id + "/" + name);
		onValue(alreadyLiked, (snapshot) => {
  	const data = snapshot.val();
		if (data === null)
			setSaveOK(false);
		else
			setSaveOK(true);
	})}, [db, id, info]);

	const saveHandler = (info) => {
		if (!id)
			return;
		const name = info.line.toString() + "_" + info.num.toString();
		if (saveOK === false) {
			set(ref(db, "save/" + id + "/" + name), {...info});
			setSaveOK(true);
		} else if (saveOK === true) {
			set(ref(db, "save/" + id + "/" + name), {});
			setSaveOK(false);
		}
	};

	return (
		<div onClick={props.closeModal} className={classes.main}>
			<div className={classes.modal}>
				<button onClick={props.closeModal}>x</button>
				<div className={classes.vid}>
					<ReactPlayer width={"100%"} url={info.url} loop playing controls />
				</div>
				<div style={{display: "flex"}}>
					<div className={classes.info}>
						<p style={{paddingBottom: "20px"}}><a>{info.year} · </a>
						<a className={classes.age}>{info.age}</a>
						<a>· {info.time}</a></p>
						<h4 style={{paddingBottom: "20px"}}>This Netflix page is for a pratice.</h4>
						<p>This page does not provide real movies.</p>
						<p>This page is made with React, NextJS, Redux,<br/>react-transition-group, react-player, etc.</p>
						<br/>
						<p>If you see any bug. Please Contact below.</p>
						<p>Email: <a style={{textDecoration: "underline"}}>y7k7380@naver.com</a></p>
					</div>
					<div className={classes.cast}>
						<p><a style={{ color: "gray" }}>Cast:</a> Wazowski, TaeWoong</p>
						<p><a style={{ color: "gray" }}>Genres:</a> React, Having fun.</p>
						<p><a style={{ color: "gray" }}>This is:</a> Wazowski developed to improve React skill.</p>
						{saveOK === false && <button onClick={e=>saveHandler(info)}>Like</button>}
						{saveOK === true && <button onClick={e=>saveHandler(info)}>Dislike</button>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExpModal;