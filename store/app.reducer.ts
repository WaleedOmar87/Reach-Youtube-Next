import { IReducerAction, IReducerState } from "@/types/store.types";

/* Default State */
export const initialState = {
	searchTerm: "",
	updateSearchTerm: (term: string) => {},
	appTheme: "light",
	updateTheme: (theme: string) => {},
	videosList: [],
	updateVideosList: (videos: []) => {},
	selectedVideo: null,
	updateSelectedVideo: (id: number) => {},
	filter: "",
	updateFilter: (filter: string) => {},
	loading: true,
	updateLoading: (status: boolean) => {},
	isLocalData: false,
	updateLocalStatus: (status: boolean) => {}
};

/* Main App Reducer */
export const AppReducer = (state: IReducerState, action: IReducerAction) => {
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_SEARCH":
			return {
				...state,
				searchTerm: payload.searchTerm,
			};
			break;

		case "UPDATE_LOADING":
			return {
				...state,
				loading: payload.loading,
			};
			break;

		case "UPDATE_THEME":
			return {
				...state,
				appTheme: payload.appTheme,
			};
			break;

		case "UPDATE_FILTER":
			return {
				...state,
				filter: payload.filter,
			};
			break;

		case "UPDATE_VIDEOS_LIST":
			return {
				...state,
				videosList: payload.videosList,
			};
			break;

		case "UPDATE_SELECTED_VIDEO":
			return {
				...state,
				selectedVideo: payload.selectedVideo,
			};
			break;
		case "UPDATE_LOCAL_STATUS":
			return {
				...state,
				isLocalData: payload.isLocalData,
			};
			break;
		default:
			throw new Error(`${type} is not a valid reducer type`);
	}
};
