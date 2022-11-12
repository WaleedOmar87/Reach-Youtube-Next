import localData from "__mocks__/data.json";
import { expect } from "@jest/globals";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { VideosList, Header } from "../components";
import { AppProvider, initialState } from "../store";
import mockFetch from "../__mocks__/fetch";

/* Test Searching For Videos */
describe("Test Searching For Videos", () => {
	const contextDefaultValues = {
		...initialState,
		videosList: localData.items,
		loading: false,
	};

	test("Loading Videos List", async () => {
		// Mock fetch data and render videos list and header
		mockFetch(localData);
		await act(async () => {
			render(
				<AppProvider value={contextDefaultValues}>
					<Header />
					<VideosList />
				</AppProvider>
			);
		});

		// Enter search term and submit search form
		const searchForm = await screen.findByTestId("search-form");
		const searchInput = await screen.findByTestId("search-input");
		await act(async () => {
			fireEvent.change(searchInput, {
				target: {
					value: "React",
				},
			});
			fireEvent.submit(searchForm);
		});

		// Get list of videos
		const videosContainer = await screen.findByTestId(
			"videos-list-container"
		);
		const videosList = videosContainer.querySelectorAll(".single-video");
		const getFirstVideoTitle =
			videosList[0].querySelector(".video-title a");

		// Expect list of videos to change
		expect(videosList.length).toBeGreaterThan(0);
		expect(getFirstVideoTitle && getFirstVideoTitle.innerHTML).toContain(
			"React"
		);
	});
});
