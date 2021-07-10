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
	let i = 0;
	const commitsData = [...props.gitData.Com].slice(0, 29).map((e) => {
		e.key = i++;
		return e;
	});

	let j = 0;
	const reposData = [...props.gitData.Res].slice(0, 29).map((e) => {
		e.key = j++;
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
						pagination={commitsData.length > 10 ? { pageSize: 10 } : null}
					/>
					<span className={s.title}>COMMITS</span>
				</div>
				<div className={s.slideContainer}>
					<Table
						className={s.table}
						columns={reposColumns}
						dataSource={reposData}
						pagination={commitsData.length > 10 ? { pageSize: 10 } : null}
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
