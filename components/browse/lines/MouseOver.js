import classes from './MouseOver.module.css';

const MouseOver = (props) => {
	const info = props.info;
	
	return (
		<div style={props.style} className={classes.con}>
			<div style={{ paddingRight: "5px", paddingTop: "5px" }}>
				{/*<button className={classes.btn1}>+</button>〉*/}
				<button
					onClick={e=>{props.modalOpen(info)}}
					className={`${classes.btn2} ${classes.tooltip}`}
				>
					?
					<span className={`${classes.tooltiptext} ${classes.tooltipTop}`}>
						More info
					</span>
				</button>
			</div>
			<div className={classes.info}>
				<p>{info.year} · </p>
				<p className={classes.age}>{info.age}</p>
				<p>· {info.time}</p>
			</div>
		</div>
	);
};

export default MouseOver;