require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponseType } from "@/types/api.types";

/* API Endpoint to handle api requests */
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseType>
) {
	const { q } = req.query;
	const params = new URLSearchParams({
		q: q,
		key: process.env.YOUTUBE_API_KEY,
		part: "snippet",
	} as any);
	const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
	console.log(url);
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((error: any) => {
			res.status(500).send(error);
		});
}
