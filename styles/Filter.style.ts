import styled from "styled-components";

export const FilterStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	margin: 1rem 0 0 0;
	padding: 0 15px;
	.filter-menu {
		justify-self: flex-end;
		display: flex;
		align-items: center;
		gap: 1rem;
		h4 {
			padding: 0;
		}
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 1rem;
			li {
				list-style: none;
				label {
					display: flex;
					gap: 0.2rem;
				}
			}
		}
	}
`;
