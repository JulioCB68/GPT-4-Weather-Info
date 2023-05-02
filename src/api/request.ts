import { APIkey, api } from "./api";

export const getWeatherData = async (
	city: string | string[] | undefined
): Promise<Weather> => {
	const response = await api.get(`weather?q=${city}&appid=${APIkey}`);
	return response.data;
};
