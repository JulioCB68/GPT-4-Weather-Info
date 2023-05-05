import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid";
import { Callout } from "@tremor/react";
import React from "react";

type Props = {
	message: string | undefined;
	warning?: boolean;
};

const CalloutCard: React.FC<Props> = ({ message, warning }: Props) => {
	return (
		<Callout
			className="mt-4"
			title={message ? message : "nada"}
			// title={message}
			icon={warning ? ExclamationIcon : CheckCircleIcon}
			color={warning ? "rose" : "teal"}
		/>
	);
};

export default CalloutCard;
