import React from "react";

import SrcInst from "../../Static/Img/Icons/Sidebar/Inst.png";
import s from "./Style/Footer.module.sass";

const Footer = () => {
	return (
		<div className={s.root}>
			<div className={s.container}>
				<div>
					<div>
						<img src={SrcInst} alt="" />
						<span>
							Данные берутся с моего{" "}
							<a href="https://www.instagram.com/sepezho">instagram</a> и{" "}
							<a href="https://github.com/SEPEZHO">gitHub</a> при загрузке
							страницы.
						</span>
					</div>
					<span>
						А вот мой старый <a href="https://superold.sepezho.com">сайт</a>{" "}
						портфолио.
						<br />
						Загляни если интересно :)
					</span>
				</div>
				<span className={s.signature}>
					<p>Created by Sepezho 2020</p>
					<p className={s.lastSignature}>edit 2021</p>
				</span>
			</div>
		</div>
	);
};

export default Footer;
