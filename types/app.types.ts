import { AppProps } from "next/app";

export interface IError {
	message: string;
	code: number;
}
export interface IVideo {
	video: {
		kind: string;
		etag: string;
		id: {
			kind: string;
			videoId: string;
		};
		snippet: {
			publishedAt: string;
			channelId: string;
			title: string;
			description: string;
			thumbnails: {
				default: {
					url: string;
					width: number;
					height: number;
				};
				medium: {
					url: string;
					width: number;
					height: number;
				};
				high: {
					url: string;
					width: number;
					height: number;
				};
			};
			channelTitle: string;
			liveBroadcastContent?: any;
			publishTime: string;
		};
	};
}

export interface IVideosList<IVideo> {
	kind: string;
	etag: string;
	nextPageToken: string;
	regionCode: string;
	pageInfo: {
		totalResults: Number;
		resultsPerPage: number;
	};
	items: Array<IVideo>;
}
