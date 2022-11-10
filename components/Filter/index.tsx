import React, { FC, useContext } from "react";
import { FilterStyle } from "@/styles/Filter.style";
import { AppContext } from "@/store/app.context";
import { ContainerStyle } from "@/styles/Container.style";

export const Filter: FC = (): JSX.Element => {
	const { filter, updateFilter, videosList } = useContext(AppContext);
	const checkboxes = [
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
						<div className="filter-menu">
							<h4>Filter</h4>
							<ul>
								{checkboxes.map((box) => {
									return (
										<li key={box.id}>
											<label htmlFor={box.id}>
												<input
													type="checkbox"
													defaultChecked={
														filter === box.id
													}
													onChange={(event) =>
														updateFilter(
															event.target.value
														)
													}
													id={box.id}
												/>
												{box.title}
											</label>
										</li>
									);
								})}
							</ul>
						</div>
					</FilterStyle>
				</div>
			</div>
		</ContainerStyle>
	);
};
