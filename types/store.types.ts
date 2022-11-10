export interface IReducerState {
	searchTerm: string;
	appTheme: string;
	videosList: {}[];
	selectedVideo: {} | null;
	loading: boolean;
}

export interface IReducerAction {
	type: string;
	payload: IReducerState;
}
