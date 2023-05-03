import { APIkey, api } from "./api";

export const getWeatherData = async (
	lat: string | string[] | undefined,
	long: string | string[] | undefined
): Promise<Weather> => {
	const response = await api.get(
		`weather?lat=${lat}&lon=${long}&appid=${APIkey}`
	);
	return response.data;
};
