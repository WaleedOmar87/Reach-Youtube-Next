export interface IReducerState {
	searchTerm: string;
	appTheme: string;
	videosList: {}[];
	selectedVideo: {} | null;
	loading: boolean;
	filter: string;
	isLocalData: boolean;
}

export interface IReducerAction {
	type: string;
	payload: IReducerState;
}
