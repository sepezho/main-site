import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import Waiting from "../../../Static/Img/Icons/Slider/Waiting.svg";
import PostLikesData from "../../../Logics/PostLikesData";

import s from "../Style/Header.module.sass";

// const throttle = require('lodash/throttle')

// throttle replacement :)
let click = true;

const Like = (props) => {
	const awesomeShadow =
		"0 2.8px 2.2px rgba(0, 0, 0, 0.0034), 0 6.7px 5.3px rgba(0, 0, 0, 0.0048), 0 12.5px 10px rgba(0, 0, 0, 0.006), 0 22.3px 17.9px rgba(0, 0, 0, 0.0072), 0 41.8px 33.4px rgba(0, 0, 0, 0.0086), 0 100px 80px rgba(0, 0, 0, 0.012)";
	const awesomeShadowLiked =
		"0 1.4px 1.1px #e6fffa, 0 3.35px 2.7px #e6fffa, 0 6px 5px #e6fffa, 0 11.15px 9px #e6fffa, 0 20px 16px #e6fffa, 0 50px 40px #e6fffa";

	const [likes, setLikes] = useState(props.likes); //big thumbs
	const [shadow, setShadow] = useState(
		props.isLiked && likes === props.likes ? awesomeShadowLiked : awesomeShadow
	);
	const [emoji, setEmoji] = useState(
		props.isLiked && likes === props.likes
			? "-110px 0 -95px 0"
			: "-56px 0 -100px 0"
	); //ok or big thumbs

	useEffect(() => {
		setLikes(props.likes);
		setEmoji(props.isLiked ? "-100px 0 -95px 0" : "-56px 0 -100px 0"); //ok or big thumbs
		setShadow(props.isLiked ? awesomeShadowLiked : awesomeShadow);

		if (!props.isLiked && props.likes !== "loading...") {
			props.setMessage({ message: "👍 u can like it!" });
		}
	}, [props]);

	const likeAction = () => {
		if (!props.isLiked && likes === props.likes) {
			PostLikesData();
			setLikes(props.likes + 1);
			setEmoji("-100px 0 -95px 0"); //ok
			setShadow(awesomeShadowLiked);
			props.setMessage({ message: "thx!" });
			// throttle replacement :)
			click = false;
			setTimeout(() => {
				click = true;
			}, 3000);
		} else {
			props.setMessage({ message: "But u can`t unlike ahaha" });
			setEmoji("-100px 0 -42px 0"); //fuck
			// throttle replacement :)
			click = false;
			setTimeout(() => {
				click = true;
				setEmoji("-100px 0 -95px 0");
			}, 3000); //back to ok
		}
	};

	return (
		<div
			className={s.likeContainer}
			style={{ boxShadow: shadow }}
			onClick={() => (click ? likeAction() : null)}>
			{props.likes === "loading..." ? (
				<img src={Waiting} className={s.waiting} alt="" />
			) : (
				<div className={s.likeIcon} style={{ margin: emoji }}>
					<span>👍</span>
					<span>👌</span>
					<span>🖕</span>
				</div>
			)}
			<span className={s.subTitle}>{likes}</span>
		</div>
	);
};

const UpdateCatch = (state) => {
	return {
		likes: state.likesData.Likes,
		isLiked: state.likesData.IsLiked,
	};
};

export default connect(UpdateCatch)(Like);
