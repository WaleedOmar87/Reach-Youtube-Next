import React, { useState, useEffect, useContext } from "react";
import { config } from "@/config/index";
import { AppContext } from "@/store/app.context";

export const useFetch = (query: string) => {
	const { searchTerm, videosList, updateVideosList } = useContext(AppContext);
	const [data, setData] = useState<object>({});
	const [error, setError] = useState<string>("");
	const api = `${config.api}/?q=${query}`;

	// Fetch data
	const getAPIData = async () => {
		try {
			const response = await fetch(api, {
				method: "GET",
			});
			setData(response);
		} catch (err: any) {
			return setError(err);
		}
	};

	// Fetch data
	useEffect(() => {
		getAPIData();
	}, [searchTerm]);
	return [data, error];
};
