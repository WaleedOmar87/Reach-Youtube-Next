import { FC, useContext, useEffect, useState } from "react";
import { ContainerStyle } from "@/styles/index";
import { AppContext } from "@/store/app.context";
import { VideoItem, Loading, Error, Hint } from "@/components/index";
import { config } from "@/config/index";
import { IVideo, IError } from "@/types/app.types";
import { VideosListStyle } from "@/styles/index";
import { useFetch } from "@/hooks/useFetch";

/* Header Main Component */
export const VideosList: FC = (): JSX.Element => {
	const { error, isLocalData, loading, videosList } = useFetch();
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
						<VideosListStyle data-testid="videos-list-container">
							{!loading ? (
								videosList.map((video: IVideo["video"]) => {
									return (
										<VideoItem
											key={
												video.id.videoId
													? video.id.videoId
													: video.id.playlistId
											}
											video={video}
										/>
									);
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
