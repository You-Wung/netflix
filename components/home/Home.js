import { Fragment } from "react";
import { useRouter } from "next/router";
import TvPart from "./TvPart";
import PhonePart from "./PhonePart";
import DevicePart from "./DevicePart";
import Kids from "./Kids";
import Questions from "./Questions";
import Exp from "./Exp";
import Main from "./Main";

const Home = () => {
	const router = useRouter();
	
	const signinHandler = () => {
		router.push('/login');
	};

	return (
		<Fragment>
			<Main
				signinHandler={signinHandler}
			/>
			<TvPart />
			<PhonePart />
			<DevicePart />
			<Kids />
			<Questions />
			<Exp />
		</Fragment>
	);
};

export default Home;
