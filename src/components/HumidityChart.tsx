import { dataCharts, dataFormatter } from "@/utils/charts";
import { AreaChart, Card, Title } from "@tremor/react";
import React from "react";

const HumidityChart: React.FC = () => {
	const data = dataCharts()
		.map((temp, hour) => ({
			time: Number(hour),
			"Humidity (%)": temp.chart,
		}))
		.slice(0, 24);

	return (
		<Card>
			<Title>Humidity Levels</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="time"
				categories={["Humidity (%)"]}
				colors={["teal"]}
				minValue={0}
				maxValue={100}
				valueFormatter={dataFormatter}
				yAxisWidth={40}
			/>
		</Card>
	);
};

export default HumidityChart;
