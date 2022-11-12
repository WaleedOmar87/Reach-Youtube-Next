import { useState, useEffect, useContext } from "react";
import { config } from "@/config/index";
import { AppContext } from "@/store/app.context";
import { IError } from "@/types/app.types";

export const useFetch = () => {
	const [error, setError] = useState<IError>({ code: 0, message: "" });
	const {
		searchTerm,
		loading,
		updateLoading,
		videosList,
		updateVideosList,
		filter,
		isLocalData,
		updateLocalStatus,
	} = useContext(AppContext);

	/* Update Videos List When Search Term Changes */
	useEffect(() => {
		// Display Loading Screen
		updateLoading(true);

		// Prepare Local API
		const params = new URLSearchParams({
			q: searchTerm,
			filter: filter,
		});
		const api = `${config.api}/?${params.toString()}`;

		// Fetch data from local api
		fetch(api, {
			method: "GET",
		})
			.then((response) => {
				return response.json();
			})
			.then((content) => {
				const { items, error, local } = content;
				if (error) {
					// Set Error if error were received
					setError({ code: error.code, message: error.message });
				} else {
					// Reset Error
					setError({ code: 0, message: "" });

					// Disable Loading Screen
					updateLoading(false);

					// Update Videos List
					updateVideosList(items);

					// Show hint if local data is being loaded
					local && updateLocalStatus(local);
				}
			});
	}, [searchTerm, filter]);

	return {
		error,
		isLocalData,
		loading,
		videosList,
	};
};
