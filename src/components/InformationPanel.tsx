import React from "react";
import CityPicker from "./CityPicker";

type Props = {
	city: string | string[] | undefined;
	lat: string | string[] | undefined;
	long: string | string[] | undefined;
	data: string | string[] | undefined;
};

const InformationPanel: React.FC<Props> = ({
	city,
	lat,
	long,
	data,
}: Props) => {
	return (
		<div className="bg-gradient-to-br from-[#394f68] to-[#183b7e] text-white p-10">
			<div className="pb-5">
				<h1 className="text-6xl font-bold pb-3">{decodeURI(String(city))}</h1>
				<p className="text-xs text-gray-400">
					Long/Lat: {long}, {lat}
				</p>
			</div>

			<CityPicker />

			<hr className="my-10" />

			<div className="mt-5 flex items-center justify-between space-x-10 mb-5">
				<div>
					<p className="text-xl">
						{new Date().toLocaleDateString("en-GB", {
							weekday: "long",
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>

					<p className="font-extralight">
						{Intl.DateTimeFormat().resolvedOptions().timeZone}
					</p>
				</div>

				<p className="text-xl font-bold uppercase">
					{new Date().toLocaleTimeString("pt-BR", {
						hour: "numeric",
						minute: "numeric",
						hour12: false,
					})}
				</p>
			</div>

			<hr className="my-10 mb-5" />

			<div>
				<div></div>
			</div>
		</div>
	);
};

export default InformationPanel;
