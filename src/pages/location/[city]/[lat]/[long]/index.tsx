import React from "react";

import { useRouter } from "next/router";

import { useQuery } from "react-query";

import { getWeatherData } from "@/api/request";
import { getDate } from "@/utils/getData";

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
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
