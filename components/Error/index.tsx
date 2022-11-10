import React, { FC } from "react";
import { IError } from "@/types/app.types";
export const Error: FC<IError> = (props: IError): JSX.Element | any => {
	const { code, message } = props;
	return code > 0 ? (
		<div className="error-container">{`${code}: ${message}`}</div>
	) : (
		""
	);
};
