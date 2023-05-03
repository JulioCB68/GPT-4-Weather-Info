import React, { useState } from "react";
import { useRouter } from "next/router";

import { CityOption, CountryOption } from "./type";

import { Country, City } from "country-state-city";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";

const CityPicker: React.FC = () => {
	const router = useRouter();
	const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
	const [selectedCity, setSelectedCity] = useState<CityOption>(null);

	const handleSelectedCountry = (option: CountryOption) => {
		setSelectedCountry(option);
		setSelectedCity(null);
	};

	const handleSelectedCity = (option: CityOption) => {
		setSelectedCity(option);
		router.push(
			`/location/${option?.value?.name}/${option?.value?.latitude}/${option?.value?.longitude}`
		);
	};

	const countryOptions = Country.getAllCountries().map((country) => ({
		value: {
			latitude: country.latitude,
			longitude: country.longitude,
			isoCode: country.isoCode,
		},
		label: country.name,
	}));

	return (
		<div className="space-y-4">
			<div className="space-y-2">
				<div className="flex items-center space-x-2 text-white/80">
					<GlobeIcon className="w-5 h-5 text-white" />
					<label htmlFor="country">Country</label>
				</div>
				<Select
					className="text-black"
					value={selectedCountry}
					onChange={handleSelectedCountry}
					options={countryOptions}
				/>
			</div>

			{selectedCountry && (
				<div className="space-y-2">
					<div className="flex items-center space-x-2 text-white/80">
						<GlobeIcon className="w-5 h-5 text-white" />
						<label htmlFor="country">City</label>
					</div>

					<Select
						className="text-black"
						value={selectedCity}
						onChange={handleSelectedCity}
						options={City.getCitiesOfCountry(
							selectedCountry.value.isoCode
						)?.map((state) => ({
							value: {
								latitude: state.latitude!,
								longitude: state.longitude!,
								countryCode: state.countryCode,
								name: state.name,
								stateCode: state.stateCode,
							},
							label: state.name,
						}))}
					/>
				</div>
			)}
		</div>
	);
};

export default CityPicker;
