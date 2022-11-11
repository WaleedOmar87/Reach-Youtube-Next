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

	if (filter == "lastWeek" || filter == "lastMonth" || filter == "lastDay") {
		let filteredDate = filterDate(filter);
		params.append("publishedAfter", filteredDate);
	}

	/* API Url */
	const url = `https://www.googleapis.com/youtube/v3/search?${params}`;
	console.log(filter);

	/*
		Fetch data from the api,
		if fetching data fails for reaching quota limits, use local data.json file instead
	*/
	fetch(url, {
		method: "GET",
	})
		.then((res) => res.json())
		.then((data) => {
			// Check if fallback to local data is allowed
			let fallback = process.env.ENABLE_FALLBACK;

			if (fallback === "true") {
				if (data.hasOwnProperty("error")) {
					const localData = fs.readFileSync("__mocks__/data.json");
					res.status(200).send(localData as any);
				} else {
					// Add localData parameter
					data.local = false;
					res.status(200).send(data);
				}
			} else {
				res.status(200).send(data);
			}
		})
		.catch((error: any) => {
			res.status(500).send(error);
		});
}
