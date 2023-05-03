import React from "react";

import { AreaChart, Card, Title } from "@tremor/react";

import { fahrenheitToCelsius } from "@/utils/fahrenheitToCelsius";
import {
	dataFormatterTemperature,
	generateTemperatureList,
} from "@/utils/charts";

type Props = {
	weatherData: Weather | undefined;
};

const TempChart: React.FC<Props> = ({ weatherData }: Props) => {
	const temperatureList = generateTemperatureList(
		Number(fahrenheitToCelsius(weatherData?.main.temp_min)),
		Number(fahrenheitToCelsius(weatherData?.main.temp_max)),
		Number(fahrenheitToCelsius(weatherData?.main.temp)),
		24
	);

	const data = temperatureList.map((temp, hour) => ({
		time: temp.hour,
		"Thermal Sensation": temp.thermalSensation,
		"Temperature (C)": temp.temperature,
	}));

	return (
		<Card>
			<Title>Temperature & Thermal Sensation</Title>
			<AreaChart
				className="mt-6"
				data={data}
				showLegend
				index="time"
				categories={["Temperature (C)", "Thermal Sensation"]}
				colors={["yellow", "rose"]}
				minValue={0}
				valueFormatter={dataFormatterTemperature}
				yAxisWidth={40}
			/>
		</Card>
	);
};

export default TempChart;
