/* Filter date to RFC 3339 format for youtube api */
export const filterDate = (date: string): string => {
	const now = new Date();
	const dates = {
		lastDay: 0,
		lastWeek: 7,
		lastMonth: 30,
	};
	return new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() - dates[date as keyof typeof dates]
	).toISOString();
};
