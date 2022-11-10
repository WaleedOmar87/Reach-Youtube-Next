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
			.meta {
				display: flex;
				flex-direction: column;
				.channel-title {
					border-bottom: 1px solid #ccc;
					padding-bottom: 0.5rem;
					margin-bottom: 0.5rem;
				}
			}
		}
	}

	@media screen and (max-width: 640px) {
		font-size: 0.8rem;
		max-width: 100vw;
		overflow: hidden;
		.single-video {
			width: 50%;
		}
	}
`;
