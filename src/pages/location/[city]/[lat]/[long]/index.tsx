import React from "react";

import { useRouter } from "next/router";

import { useQuery } from "react-query";

import { getWeatherData } from "@/api/request";
import { getDate } from "@/utils/getData";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import { fahrenheitToCelsius } from "@/utils/fahrenheitToCelsius";
import InformationPanel from "@/components/InformationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";
import HumidityChart from "@/components/HumidityChart";
import { useChatGpt } from "@/api/weatherSummary";

const WeatherPage = () => {
	const router = useRouter();
	const { city, lat, long } = router.query;

	const { data, isLoading } = useQuery(
		["weather", lat, long],
		() => getWeatherData(lat, long),
		{
			retry: 3,
		}
	);

	// "http://localhost:3000/api/getWeatherSummary"

	const weatherData = {
		coord: {
			lon: -48.60694,
			lat: -27.59444,
		},
		weather: [
			{
				id: 800,
				main: "Clear",
				description: "clear sky",
				icon: "01d",
			},
		],
		base: "stations",
		main: {
			temp: 282.55,
			feels_like: 281.86,
			temp_min: 280.37,
			temp_max: 284.26,
			pressure: 1023,
			humidity: 100,
		},
		visibility: 16093,
		wind: {
			speed: 1.5,
			deg: 350,
			gust: 5.97,
		},
		clouds: {
			all: 1,
		},
		dt: 1560350645,
		sys: {
			type: 1,
			id: 5122,
			country: "US",
			sunrise: 1560343627,
			sunset: 1560396563,
		},
		timezone: -25200,
		id: 420006353,
		name: "Mountain View",
		cod: 200,
	};

	const { data: GPTdata } = useChatGpt(weatherData);

	console.log(GPTdata?.content);

	return (
		<div>
			<InformationPanel city={city} lat={lat} long={long} data="data" />

			<div>
				<div className="p-5">
					<div className="pb-5">
						<h2 className="text-xl font-bold">Todays Overview</h2>
						<p className="text-sm text-gray-400">
							Last Updated at: {getDate(city, data?.sys.country)}
						</p>
					</div>
					<div className="m-2 mb-10">
						<CalloutCard message={GPTdata?.content} />
						{/* <CalloutCard message="This is where GPT-4 Summary will go!" /> */}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-2 mb-10">
						<StatCard
							title="Maximum Temperature"
							metric={`${fahrenheitToCelsius(data?.main.temp_max)}º`}
							color="yellow"
						/>
						<StatCard
							title="Minimum Temperature"
							metric={`${fahrenheitToCelsius(data?.main.temp_min)}º`}
							color="green"
						/>
						<div>
							<StatCard
								title="Thermal Sensation"
								metric={`${fahrenheitToCelsius(data?.main.feels_like)}º`}
								color="rose"
							/>
							{String(fahrenheitToCelsius(data?.main.feels_like)) > "25.0" && (
								<div>
									<CalloutCard
										message="The UV is high today, be sure to wear SPF!"
										warning
									/>
								</div>
							)}
						</div>

						<div className="flex space-x-3">
							<StatCard
								title="Wind Speed"
								metric={`${data?.wind.speed}m/s`}
								color="cyan"
							/>

							<StatCard
								title="Wind Direction"
								metric={`${data?.wind.deg}º`}
								color="violet"
							/>
						</div>
					</div>

					<div className="space-y-3">
						<TempChart weatherData={data} />
						<RainChart />
						<HumidityChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
