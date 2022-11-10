import { FC, useContext, useEffect, useState } from "react";
import { ContainerStyle } from "@/styles/index";
import { AppContext } from "@/store/app.context";
import { VideoItem, Loading, Error, Hint } from "@/components/index";
import { config } from "@/config/index";
import { IVideo, IError } from "@/types/app.types";
import { VideosListStyle } from "@/styles/index";

/* Header Main Component */
export const VideosList: FC = (): JSX.Element => {
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
		const api = `${config.api}/?${params.toString()}}`;

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
	}, [searchTerm]);

	return (
		<ContainerStyle>
			<div className="container">
				<header className="page-header">
					<div className="container-row">
						<Hint display={isLocalData}>
							Local Data Is Being Loaded Due To Error Connecting
							To Youtube API,
							<a href="https://github.com/WaleedOmar87/Reach-Youtube-Next">
								https://github.com/WaleedOmar87/Reach-Youtube-Next
							</a>
						</Hint>
						<Error code={error.code} message={error.message} />
						<VideosListStyle>
							{!loading ? (
								videosList.map((video: IVideo) => {
									return <VideoItem video={video} />;
								})
							) : (
								<Loading />
							)}
						</VideosListStyle>
					</div>
				</header>
			</div>
		</ContainerStyle>
	);
};
