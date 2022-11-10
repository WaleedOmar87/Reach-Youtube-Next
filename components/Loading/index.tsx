import React, { FC } from "react";
import { LoadingStyle } from "@/styles/Loading.style";
export const Loading: FC = (): JSX.Element => {
	return (
		<LoadingStyle>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				style={{ margin: "auto" }}
				width="200"
				height="200"
				display="block"
				preserveAspectRatio="xMidYMid"
				viewBox="0 0 100 100"
			>
				<circle cx="84" cy="50" r="10" fill="#e15b64">
					<animate
						attributeName="r"
						begin="0s"
						calcMode="spline"
						dur="1.3888888888888886s"
						keySplines="0 0.5 0.5 1"
						keyTimes="0;1"
						repeatCount="indefinite"
						values="10;0"
					></animate>
					<animate
						attributeName="fill"
						begin="0s"
						calcMode="discrete"
						dur="5.5555555555555545s"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="#e15b64;#abbd81;#f8b26a;#f47e60;#e15b64"
					></animate>
				</circle>
				<circle cx="16" cy="50" r="10" fill="#e15b64">
					<animate
						attributeName="r"
						begin="0s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="0;0;10;10;10"
					></animate>
					<animate
						attributeName="cx"
						begin="0s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="16;16;16;50;84"
					></animate>
				</circle>
				<circle cx="50" cy="50" r="10" fill="#f47e60">
					<animate
						attributeName="r"
						begin="-1.3888888888888886s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="0;0;10;10;10"
					></animate>
					<animate
						attributeName="cx"
						begin="-1.3888888888888886s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="16;16;16;50;84"
					></animate>
				</circle>
				<circle cx="84" cy="50" r="10" fill="#f8b26a">
					<animate
						attributeName="r"
						begin="-2.7777777777777772s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="0;0;10;10;10"
					></animate>
					<animate
						attributeName="cx"
						begin="-2.7777777777777772s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="16;16;16;50;84"
					></animate>
				</circle>
				<circle cx="16" cy="50" r="10" fill="#abbd81">
					<animate
						attributeName="r"
						begin="-4.166666666666666s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="0;0;10;10;10"
					></animate>
					<animate
						attributeName="cx"
						begin="-4.166666666666666s"
						calcMode="spline"
						dur="5.5555555555555545s"
						keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
						keyTimes="0;0.25;0.5;0.75;1"
						repeatCount="indefinite"
						values="16;16;16;50;84"
					></animate>
				</circle>
			</svg>
		</LoadingStyle>
	);
};
