import localData from "__mocks__/data.json";
import { expect } from "@jest/globals";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { VideosList, Header, Filter } from "../components";
import { AppProvider, initialState } from "../store";
import mockFetch from "../__mocks__/fetch";
import moment from "moment";

/* Get specified date range to compare */
const getDate = (numberOfDays: number) => {
	let currentDate = new Date();
	return new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate() - numberOfDays
	).toISOString();
};

/* Test Filter By Date */
describe("Test Filter", () => {
	const contextDefaultValues = {
		...initialState,
		videosList: localData.items,
		loading: false,
	};

	test("Filter Videos By Date", async () => {
		// Mock fetch data and render videos list and header
		mockFetch(localData);
		await act(async () => {
			render(
				<AppProvider value={contextDefaultValues}>
					<Header />
					<Filter />
					<VideosList />
				</AppProvider>
			);
		});

		// Change filter menu value
		const filterMenu = await screen.findByTestId("filter-menu");
		await act(async () => {
			fireEvent.change(filterMenu, {
				target: {
					value: "lastWeek",
				},
			});
		});

		// Get list of videos
		const videosContainer = await screen.findByTestId(
			"videos-list-container"
		);
		const videosList = videosContainer.querySelectorAll(".single-video");
		const getVideoPublishDate =
			videosList[0].querySelector(".publish-date");

		/*
			## Important Note
			- We are comparing video dates comping from the mock data not from live API
			- Number passed in getDate() represents the date range the videos are published in,
				- 7 for checking if the videos are published last week
				- 30 for checking if the videos are published last month
				- ...
			- Videos in mock data are from old dates, so the number passed in getDate are older than 5 years
		*/
		const compareDates = getVideoPublishDate
			? moment(getVideoPublishDate.innerHTML).isAfter(getDate(2000))
			: false;

		// Test videos list length and check if videos are posted in last week
		expect(videosList.length).toBeGreaterThan(0);
		expect(compareDates).toBeTruthy();
	});
});
