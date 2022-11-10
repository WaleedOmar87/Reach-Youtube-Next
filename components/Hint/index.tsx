import React, { FC } from "react";
import { IHint } from "@/types/app.types";
export const Hint: FC<IHint> = (props: IHint): JSX.Element => {
	const { children, display } = props;
	return display ? <div className="hint-container">{children}</div> : <></>;
};
