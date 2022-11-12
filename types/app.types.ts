import { AppProps } from "next/app";
import React from "react";

export interface IError {
	message: string;
	code: number;
}
export interface IHint {
	display: boolean;
	children?: any;
}

export interface IVideo {
	kind: string;
	etag: string;
	id: {
		kind: string;
		videoId?: string;
		playlistId?: string;
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
}

export interface IVideosList<IVideo> {
	local?: boolean;
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
