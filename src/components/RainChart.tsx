import React from "react";

import { AreaChart, Card, Title } from "@tremor/react";

import { dataCharts, dataFormatter } from "@/utils/charts";

const RainChart: React.FC = () => {
	const data = dataCharts()
		.map((temp, hour) => ({
			time: Number(hour),
			"Rain (%)": temp.chart,
		}))
		.slice(0, 24);

	return (
		<Card>
			<Title>Chances of Rain</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="time"
				categories={["Rain (%)"]}
				colors={["blue"]}
				minValue={0}
				maxValue={100}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
};

export default RainChart;
