// import { NextResponse } from "next/server";
// import openai from "@/openai";

// export async function POST(request: Request) {
// 	const { weatherData } = await request.json();

// 	const response = await openai.createChatCompletion({
// 		model: "gpt-4",
// 		temperature: 0.8,
// 		n: 1,
// 		stream: false,
// 		messages: [
// 			{
// 				role: "system",
// 				content:
// 					"Pretend you're a weather news presenter LIVE on television. be energetic and fill od charisma. Introduce yourseld as Julio and say you are LIVE from the PAPAFAM Headquarters. State the city you are providing a summary for. The give a summary of todays weather only. Make it easy for the viewer to understand and know to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the emp_max data provided UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user",
// 					"Pretend you're a weather news presenter LIVE on television. be energetic and fill od charisma. Introduce yourseld as Julio and say you are LIVE from the PAPAFAM Headquarters. State the city you are providing a summary for. The give a summary of todays weather only. Make it easy for the viewer to understand and know to do to prepare for those weather conditions such as wear SPF if the UV is high etc. use the emp_max data provided UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user",
// 			},
// 			{
// 				role: "user",
// 				content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data ${JSON.stringify(
// 					weatherData
// 				)}`,
// 			},
// 		],
// 	});

// 	const { data } = response;

// 	return NextResponse.json(data.choices[0].message);
// }

import { useQuery } from "react-query";
import openai from "@/openai";

export function useChatGpt(weatherData: Weather) {
	return useQuery("chatGpt", async () => {
		const response = await openai.createChatCompletion({
			model: "davinci",
			temperature: 0.8,
			n: 1,
			stream: false,
			messages: [
				{
					role: "system",
					content: `Pretend you're a weather news presenter LIVE on television. be energetic and fill of charisma. Introduce yourself as Julio and say you are LIVE from the PAPAFAM Headquarters. State the city you are providing a summary for. Then give a summary of today's weather only. Make it easy for the viewer to understand and know what to do to prepare for those weather conditions such as wear SPF if the UV is high, etc. Use the emp_max data provided for UV advice. Provide a joke regarding the weather. Assume the data came from your team at the news office and not the user. City: ${weatherData.name}. Weather: ${weatherData.weather}. Temperature: ${weatherData.main.temp}. Humidity: ${weatherData.main.humidity}. Wind Speed: ${weatherData.wind.speed}`,
				},
				{
					role: "user",
					content: `Hi there, can i get a summary of todays weather, use the following information to get the weather data ${JSON.stringify(
						weatherData
					)}`,
				},
			],
		});
		return response.data.choices[0].message;
	});
}
