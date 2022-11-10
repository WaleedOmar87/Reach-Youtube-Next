import { FC, useContext, useEffect, useState } from "react";
import { ContainerStyle } from "@/styles/index";
import { AppContext } from "@/store/app.context";
import { VideoItem, Loading, Error } from "@/components/index";
import { config } from "@/config/index";
import { IVideo, IError } from "@/types/app.types";
import { VideosListStyle } from "@/styles/index";

/* Header Main Component */
const VideosList: FC = (): JSX.Element => {
	const [error, setError] = useState<IError>({ code: 0, message: "" });
	const { searchTerm, loading, updateLoading, videosList, updateVideosList } =
		useContext(AppContext);

	/* Update Videos List When Search Term Changes */
	useEffect(() => {
		updateLoading(true);
		const api = `${config.api}/?q=${searchTerm}`;
		fetch(api, {
			method: "GET",
		})
			.then((response) => {
				return response.json();
			})
			.then((content) => {
				const { items, error } = content;
				if (error) {
					setError({ code: error.code, message: error.message });
				} else {
					updateLoading(false);
					updateVideosList(items);
				}
			});
	}, [searchTerm]);

	return (
		<ContainerStyle>
			<div className="container">
				<header className="page-header">
					<div className="container-row">
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
export default VideosList;
