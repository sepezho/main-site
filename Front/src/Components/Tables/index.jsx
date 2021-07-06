import React from "react";
import { connect } from "react-redux";
import { Table } from "antd";
import Slider from "react-slick";

import { commitsColumns, reposColumns } from "./columns";

import s from "./Style/Tables.module.sass";

const Tables = (props) => {
	const settings = {
		dots: true,
		arrows: false,
		speed: 1200,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		swipe: false,
	};

	const commitsData = props.gitData.Com.slice(0, 30).map((e) => {
		e.key = e.UrlCommit;
		return e;
	});

	const reposData = props.gitData.Res.slice(0, 30).map((e) => {
		e.key = e.Url;
		return e;
	});

	return (
		<div className={s.container}>
			<Slider className={s.sliderContainer} {...settings}>
				<div className={s.slideContainer}>
					<Table
						className={s.table}
						columns={commitsColumns}
						dataSource={commitsData}
						pagination={commitsData.length > 10}
					/>
					<span className={s.title}>COMMITS</span>
				</div>
				<div className={s.slideContainer}>
					<Table
						className={s.table}
						columns={reposColumns}
						dataSource={reposData}
						pagination={reposData.length > 10}
					/>
					<span className={s.title}>GIT REPOS</span>
				</div>
			</Slider>
		</div>
	);
};

const GetCommitsData = (state) => {
	return {
		gitData: state.gitData,
	};
};

export default connect(GetCommitsData)(Tables);
