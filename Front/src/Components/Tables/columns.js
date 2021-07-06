import * as dayjs from "dayjs";

import s from "./Style/Tables.module.sass";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export const commitsColumns = [
	{
		title: "Repository",
		dataIndex: "Project",
		key: "repository",
		render: (text, record) => <a href={record.UrlProj}>{text}</a>,
	},
	{
		title: "Branch",
		dataIndex: "Branch",
		key: "branch",
	},
	{
		title: "Commit",
		dataIndex: "Message",
		key: "commit",
		render: (text, record) => <a href={record.UrlCommit}>{text}</a>,
	},
	{
		title: "Time",
		dataIndex: "Date",
		key: "time",
		render: (time) => (
			<span className={s.timeColumn}>{dayjs(time).fromNow()}</span>
		),
	},
];

export const reposColumns = [
	{
		title: "Repository",
		dataIndex: "Name",
		key: "repository",
		render: (text, record) => <a href={record.Url}>{text}</a>,
	},
	{
		title: "Branches",
		dataIndex: "Branches",
		key: "branch",
		render: (branches) =>
			JSON.parse(branches).length > 1
				? JSON.parse(branches)[0] +
				  " and " +
				  (JSON.parse(branches).length - 1) +
				  " more"
				: JSON.parse(branches)[0],
	},
	{
		title: "Description",
		dataIndex: "Description",
		key: "description",
	},
	{
		title: "Language",
		dataIndex: "Language",
		key: "Language",
	},
	{
		title: "Create",
		dataIndex: "CreateAt",
		key: "CreateAt",
		render: (time) => dayjs(time).fromNow(),
	},
	{
		title: "Last update",
		dataIndex: "LastUpdate",
		key: "LastUpdate",
		render: (time) => dayjs(time).fromNow(),
	},
	{
		title: "Size MB",
		dataIndex: "Size",
		key: "Size",
		render: (kb) => (kb * 0.0009765625).toFixed(2),
	},
];
