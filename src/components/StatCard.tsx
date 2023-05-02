import { Color } from "@tremor/react";
import { Card, Text, Metric } from "@tremor/react";
import React from "react";

type Props = {
	title: string;
	metric: string;
	color?: Color;
};

const StatCard: React.FC<Props> = ({ title, metric, color }: Props) => {
	return (
		<Card decoration="top" decorationColor={color}>
			<Text>{title}</Text>
			<Metric>{metric}</Metric>
		</Card>
	);
};

export default StatCard;
