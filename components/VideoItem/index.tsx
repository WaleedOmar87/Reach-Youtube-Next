import React, { FC } from "react";
import { IVideo } from "@/types/app.types";

export const VideoItem: FC<IVideo> = (
	props: IVideo
): JSX.Element => {
	const { snippet, id } = props.video;
	const { thumbnails, channelTitle, publishTime, title, description } =
		snippet;
	return (
		<div key={id.videoId} className="single-video">
			{id && (
				<div className="video-content">
					<picture className="video-thumbnail">
						<img src={thumbnails.high.url} alt={title} />
					</picture>
					<aside className="video-info">
						<h3 className="video-title">
							<a
								href={`https://www.youtube.com/watch?v=${id.videoId}`}
							>
								{title}
							</a>
						</h3>
						<p>{description}</p>
						<div className="meta">
							<span className="channel-title">
								{channelTitle}
							</span>
							<span className="publish-date">{publishTime}</span>
						</div>
					</aside>
				</div>
			)}
		</div>
	);
};
