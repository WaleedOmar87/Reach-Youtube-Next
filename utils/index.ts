/* Filter date to RFC 3339 format for youtube api */
export const filterDate = (date: any) => {
	const now = new Date();
	const dates = {
		lastDay: new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate()
		).toISOString(),
		lastWeek: new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - 7
		).toISOString(),
		lastMonth: new Date(
			now.getFullYear(),
			now.getMonth(),
			now.getDate() - 30
		).toISOString(),
	};

	return dates[date as keyof typeof dates];
};
