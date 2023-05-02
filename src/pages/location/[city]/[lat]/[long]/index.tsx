import React from "react";

import { useRouter } from "next/router";

import { useQuery } from "react-query";

import { getWeatherData } from "@/api/request";
import { getDate } from "@/utils/getData";
import CalloutCard from "@/components/CalloutCard";
import StatCard from "@/components/StatCard";
import { fahrenheitToCelsius } from "@/utils/fahrenheitToCelsius";

const WeatherPage = () => {
	const router = useRouter();
	const { city } = router.query;

	const { data, isLoading } = useQuery(["weather", city], () =>
		getWeatherData(city)
	);

	return (
		<div>
			<div>
				<div className="p-5">
					<div className="pb-5">
						<h2 className="text-xl font-bold">Todays Overview</h2>
						<p className="text-sm text-gray-400">
							Last Updated at: {getDate(city, data?.sys.country)}
						</p>
					</div>
					<div className="m-2 mb-10">
						<CalloutCard message="This is where GPT-4 Summary will go!" />
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
								metric={`${data?.wind.speed.toFixed(0)}m/s`}
								color="cyan"
							/>

							<StatCard
								title="Wind Direction"
								metric={`${data?.wind.deg.toFixed(0)}º`}
								color="violet"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
