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
			align-items: center;
			justify-content: flex-start;
			font-size: 1rem;
			gap: 1rem;
			svg {
				min-width: 60px;
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

	@media screen and (max-width: 640px) {
		.page-header {
			background-color: red;
			flex-wrap: wrap;
			.logo {
				color: #fff;
				span.logo-text {
					display: none;
				}
			}
			.search-bar-container {
				flex-wrap: wrap;
				width: 80%;
				.search-form {
					input[type="text"] {
						background-color: transparent;
						border-color: transparent;
						color: #fff;
						border-radius: 0.2rem;
						::placeholder {
							color: #fff;
						}
					}
					input[type="text"]:focus,
					input[type="text"]:focus-visible,
					input[type="text"]:active {
						background-color: #fff;
						color: #000;
						border-color: transparent;
						outline: none;
						::placeholder {
							color: #020202;
						}
					}
					button.submit {
						padding: 0px;
						border: none;
						background: transparent;
						svg {
							fill: #fff;
						}
					}
				}
			}
		}
	}
`;
