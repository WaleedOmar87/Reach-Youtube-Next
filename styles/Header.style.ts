import styled from "styled-components";

export const HeaderStyle = styled.section`
	.page-header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: var(--body-font-size);
		background-color: var(--header-background-color);
		font-size: var(--header-font-size);
		box-shadow: 0 0 10px 5px var(--header-box-shadow-color);
		padding: 1rem 0;
		.logo {
			display: flex;
			width: 60px;
			height: 60px;
			svg {
				width: 60px;
				height: 60px;
			}
		}
		.search-bar-container {
			display: flex;
			gap: 1em;
			min-width: 60%;
			display: flex;
			justify-content: flex-end;
			.search-form {
				min-width: 100%;
				display: flex;
				align-items: center;
				flex-direction: row;
				input[type="text"] {
					width: 80%;
					height: 50px;
					border: 1px solid #eee;
					box-shadow: none;
					padding-left: 1rem;
					border-radius: 0.2rem 0 0 0.2rem;
				}
				button.submit {
					background: #eee;
					height: 50px;
					width: 20%;
					border: 1px solid #eee;
					cursor: pointer;
					border-radius: 0 0.2rem 0.2rem 0;
					svg {
						width: 20px;
						height: 20px;
						fill: #000;
					}
				}
			}
		}
	}
`;
