export const fahrenheitToCelsius = (tempInFahrenheit: number | undefined) => {
	const temperatureC = ((Number(tempInFahrenheit) - 32) * 5) / 9;
	const temperatureRounded = Math.round(temperatureC * 100) / 1000;
	return temperatureRounded.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
};
