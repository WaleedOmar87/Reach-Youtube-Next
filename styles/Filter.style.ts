import styled from "styled-components";

export const FilterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	margin: 1rem 0 0 0;
	padding: 0 15px;
	.filter-container {
		justify-self: flex-end;
		display: flex;
		align-items: center;
		gap: 1rem;
		h4 {
			padding: 0;
		}
		.filter-menu {
			padding: 0.2em;
			font-size: 1rem;
			border: 1px solid #ccc;
			background-color: transparent;
			border-radius: 0.2rem;
		}

	}
`;
