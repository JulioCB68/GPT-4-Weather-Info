export const generateTemperatureList = (
	minTemp: number,
	maxTemp: number,
	currentTemp: number,
	numTemperatures: number
) => {
	const temperatures = [];
	const diff = maxTemp - minTemp + 8.0;
	const step = diff / (numTemperatures - 1);

	for (let i = 0; i < numTemperatures; i++) {
		const temperature = ((minTemp + i * step) * Math.PI) / 5;
		const thermalSensation = Math.round(
			(Math.sin((i / numTemperatures) * Math.PI) + 1) * 5
		);
		temperatures.push({
			hour: i,
			temperature: temperature,
			thermalSensation: thermalSensation,
		});
	}

	if (currentTemp >= minTemp && currentTemp <= maxTemp) {
		temperatures.push({ temperature: currentTemp + 5.0 });
	}

	return temperatures;
};

export const dataCharts = () => {
	const charts = [];
	for (let i = 0; i < 24; i++) {
		const chart = Math.floor(Math.random() * 10 + 20); // gera um valor aleatório entre 20 e 29 graus
		charts.push({
			hour: i,
			chart: chart,
		});
	}
	return charts;
};

export const dataFormatterTemperature = (number: number) => `${number}ºC`;
export const dataFormatter = (number: number) => `${number}º%`;
