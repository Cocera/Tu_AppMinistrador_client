import React from "react";
import "./CommunityAccountHistory.scss";
import ExpensesList from "../../components/ExpensesList/ExpensesList";
import SegmentedSlider from "../../components/SegmentedSlider/SegmentedSlider";
import { LeftOutlined } from "@ant-design/icons";
import ColumnsChart from "../../components/ColumnsChart/ColumnsChart";
import ExpensesResume from "../../components/ExpensesResume/ExpensesResume";

const CommunityAccountHistory = () => {
	const options = [
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Gastos
				</div>
			),
			value: "gastos",
		},
		{
			label: (
				<div style={{ padding: 5, paddingLeft: 9, paddingRight: 9 }}>
					Ingresos
				</div>
			),
			value: "ingresos",
		},
	];
	return (
		<>
			<a>
				{" "}
				<LeftOutlined />
				Historial
			</a>
			<ColumnsChart />
			<ExpensesResume />
			<SegmentedSlider options={options} />
			<ExpensesList />
		</>
	);
};

export default CommunityAccountHistory;
