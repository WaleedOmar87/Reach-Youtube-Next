import React, { createContext, useReducer } from "react";
import { AppReducer, initialState } from "@/store/index";
export const AppContext = createContext(initialState);

const AppProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	const updateSearchTerm = (term: string): void => {
		dispatch({
			type: "UPDATE_SEARCH",
			payload: {
				...state,
				searchTerm: term,
			},
		});
	};
	const updateTheme = (theme: string): void => {
		dispatch({
			type: "UPDATE_THEME",
			payload: {
				...state,
				appTheme: theme,
			},
		});
	};
	const updatedSelectedVideo = (video: {}): void => {
		dispatch({
			type: "UPDATE_SELECTED_VIDEO",
			payload: {
				...state,
				selectedVideo: video,
			},
		});
	};

	const updateVideosList = (videosList: []): void => {
		dispatch({
			type: "UPDATE_VIDEOS_LIST",
			payload: {
				...state,
				videosList: videosList,
			},
		});
	};

	const updateFilter = (filter: string): void => {
		dispatch({
			type: "UPDATE_FILTER",
			payload: {
				...state,
				filter: filter,
			},
		});
	};
	const updateLoading = (status: boolean): void => {
		dispatch({
			type: "UPDATE_LOADING",
			payload: {
				...state,
				loading: status,
			},
		});
	};

	const updateLocalStatus = (status: boolean): void => {
		dispatch({
			type: "UPDATE_LOCAL_STATUS",
			payload: {
				...state,
				isLocalData: status,
			},
		});
	};

	return (
		<AppContext.Provider
			value={
				{
					searchTerm: state.searchTerm,
					updateSearchTerm: updateSearchTerm,
					appTheme: "Light",
					updateTheme: updateTheme,
					videosList: state.videosList,
					updateVideosList: updateVideosList,
					selectedVideo: state.selectedVideo,
					updatedSelectedVideo: updatedSelectedVideo,
					loading: state.loading,
					updateLoading: updateLoading,
					filter: state.filter,
					updateFilter: updateFilter,
					isLocalData: state.isLocalData,
					updateLocalStatus: updateLocalStatus
				} as any
			}
		>
			{children}
		</AppContext.Provider>
	);
};
export default AppProvider;
