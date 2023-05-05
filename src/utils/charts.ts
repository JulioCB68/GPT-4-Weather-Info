export const generateTemperatureList = (
	minTemp: number,
	maxTemp: number,
	currentTemp: number
) => {
	const temperatures = [];
	const diff = maxTemp - minTemp + 3.0;
	const step = diff / (24 - 1);

	temperatures.push({
		hour: 0,
		temperature: minTemp.toFixed(2),
		thermalSensation: Math.round((Math.sin(0) + 1) * 5),
	});

	for (let i = 0; i < 24; i++) {
		let temperature = minTemp + i * step;
		const rand = Math.random();
		if (rand < 0.1) {
			// chance de 10% de baixar a temperatura
			temperature -= Math.sin(rand * Math.PI) * (diff / 4);
		} else {
			temperature += Math.sin(rand * Math.PI) * (diff / 4);
		}
		const thermalSensation = Math.round((Math.sin((i / 24) * Math.PI) + 1) * 5);
		temperatures.push({
			hour: i,
			temperature: temperature.toFixed(2),
			thermalSensation: thermalSensation,
		});
	}

	if (currentTemp >= minTemp && currentTemp <= maxTemp) {
		temperatures.push({ temperature: currentTemp });
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
