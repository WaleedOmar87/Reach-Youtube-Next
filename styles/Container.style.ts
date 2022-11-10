import styled from "styled-components";
export const ContainerStyle = styled.section`
	.container {
		display: flex;
		flex-direction: column;
		min-width: 100%;
		padding: 0px;
		.container-row {
			min-width: 1100px;
			max-width: 1100px;
			display: flex;
			justify-content: space-between;
			margin: 0 auto;
			padding: 0 15px;
			@media screen and (max-width: 640px) {
				min-width: 450px;
				max-width: 450px;
			}
			.error-container {
				display: flex;
				background: red;
				color: #fff;
				padding: 1em;
				position: fixed;
				bottom: 0;
				left: 0;
				width: 100vw;
			}
		}
	}
`;
