import styled from "styled-components";

export const VideosListStyle = styled.div`
	display: flex;
	flex-direction: row;
	min-width: 100%;
	flex-wrap: wrap;
	margin-top: 40px;
	.single-video {
		padding: 1em;
		width: 33.3%;

		.video-content {
			max-width: 100%;
			.video-thumbnail {
				overflow: hidden;
				img {
					max-width: 100%;
				}
			}
		}
	}
`;
