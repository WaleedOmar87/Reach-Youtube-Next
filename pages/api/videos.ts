require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";
import { IResponseType } from "@/types/api.types";
import { filterDate } from "@/utils/index";
import fs from "fs";

/* API Endpoint to handle api requests */
export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<IResponseType>
) {
	// Get query and date filter from request
	const { q, filter } = req.query;

	// Prepare search params
	const params = new URLSearchParams({
		q: q,
		maxResults: 30,
		key: process.env.YOUTUBE_API_KEY,
		part: "snippet",
	} as any);

	if (filter && filter !== "") {
		params.append("publishedAfter", filterDate(filter));
	}

	/* API Url */
	const url = `https://www.googleapis.com/youtube/v3/search?${params}`;

	/*
		Fetch data from the api,
		if fetching data fails for reaching quota limits, use local data.json file instead
	*/
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.hasOwnProperty("error")) {
				const localData = fs.readFileSync("__mocks__/data.json");
				res.status(200).send(localData as any);
			} else {
				res.status(200).send(data);
			}
		})
		.catch((error: any) => {
			res.status(500).send(error);
		});
}
