import React from "react";
import { useRouter } from "next/router";

const WeatherPage = () => {
	const router = useRouter();
	const { city, lat, long } = router.query;

	return (
		<div>
			<div>
				<div className="p-5">
					<div className="pb-5">
						<h2 className="text-xl font-bold">Todays Overview</h2>
						<p className="text-sm text-gray-400">Last Updated at:</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WeatherPage;
