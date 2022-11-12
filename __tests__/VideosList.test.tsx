import localData from "__mocks__/data.json";
import { expect } from "@jest/globals";
import { render, screen, act } from "@testing-library/react";
import { VideosList } from "../components";
import { AppProvider, initialState } from "../store";
import mockFetch from "../__mocks__/fetch";

describe("Test Videos List", () => {
	const contextDefaultValues = {
		...initialState,
		videosList: localData.items,
		loading: false,
	};

	test("Loading Videos List", async () => {
		mockFetch(localData);
		await act(async () => {
			render(
				<AppProvider value={contextDefaultValues}>
					<VideosList />
				</AppProvider>
			);
		});
		const videosContainer = await screen.findByTestId(
			"videos-list-container"
		);
		const videosList = videosContainer.querySelectorAll(".single-video");
		expect(videosContainer).toBeTruthy();
		expect(videosList.length).toBeGreaterThan(0);
	});
});
