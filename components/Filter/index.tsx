import React, { FC, useContext } from "react";
import { FilterStyle } from "@/styles/Filter.style";
import { AppContext } from "@/store/app.context";
import { ContainerStyle } from "@/styles/Container.style";

export const Filter: FC = (): JSX.Element => {
	const { filter, updateFilter, videosList } = useContext(AppContext);
	const filterOptions = [
		{ id: "lastDay", title: "Last 24 Hours" },
		{ id: "lastWeek", title: "Last 7 Days" },
		{ id: "lastMonth", title: "Last Month" },
	];
	return (
		<ContainerStyle>
			<div className="container">
				<div className="container-row">
					<FilterStyle>
						<div className="videos-count">
							About {videosList.length} Results
						</div>
						<div className="filter-container">
							<h4>Filter</h4>
							<select
								id="filter-menu"
								data-testid="filter-menu"
								className="filter-menu"
								onChange={(event) =>
									updateFilter(event.target.value)
								}
							>
								{filterOptions.map((option) => {
									return (
										<option
											key={option.id}
											value={option.id}
											id={option.id}
										>
											{option.title}
										</option>
									);
								})}
							</select>
						</div>
					</FilterStyle>
				</div>
			</div>
		</ContainerStyle>
	);
};
