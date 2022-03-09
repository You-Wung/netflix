import classes from "./Profile.module.css";
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "../../store/firebase";

/*
	1. 토큰 가지고 user/(replaced메일가지고) 메일로 변환
	2. browse/(replaced메일) 들어가서 객체를 가져온다.
*/
const Profile = (props) => {
	const token =
		typeof window !== "undefined" ? localStorage.getItem("token") : "";
	const db = getDatabase();
	const userRef = ref(db, "user/");
	const [jsxProf, setJsxProf] = useState();
	
	const clickHandler = (e) => {
		props.moveToVid(e.target.id);
	};

	useEffect(() => {
		let browseRef;
		let JSX_profiles;
		let profiles;

		onValue(userRef, (snapshop) => {
			const users = snapshop.val();
			let email = "";
			if (!users || token === "") return;
			for (let user in users) {
				if (users[user].token === token) {
					email = users[user].email;
					break;
				}
			}

			//console.log(email);

			browseRef = ref(db, "browse/" + email);
			onValue(browseRef, (snapshop) => {
				profiles = snapshop.val();

				let temp = [];
				for (let profile in profiles) {
					temp.push({ name: profile, img: profiles[profile].img });
				}
				JSX_profiles = temp.map((profile) => {
					return (
						<div key={profile.name} className={classes.profile}>
							<button
								id={profile.name}
								onClick={clickHandler}
								style={{
									backgroundImage: `url(${profile.img})`,
								}}
							/>
							<p>{profile.name}</p>
						</div>
					);
				});
				setJsxProf(JSX_profiles);
			});
		});
	}, []);

	return (
		<div className={classes.modal}>
			<h1>Who&apos;s watching?</h1>
			<div className={classes.profiles}>{jsxProf}</div>

		</div>
	);
};

export default Profile;
