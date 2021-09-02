import styled, { css } from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import {
	RiGroupLine,
	RiBuilding4Line,
	RiMapPin2Line,
	RiMailLine,
	RiLinksLine,
	RiBookMarkLine,
	RiStarLine,
	RiSearchLine,
} from 'react-icons/ri';
import {
	header,
	pageError,
	logo,
	search,
	icon,
	grayDark,
	username,
	gray,
	horizontalPadding,
	verticalPadding,
	border,
	link,
	primary,
	orange,
	ticker,
	white,
} from './variaveis';

export const ContainerHeader = styled.div`
	display: flex;
	align-items: center;
	background: ${header};
	padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
	fill: ${logo};
	width: 32px;
	height: 32px;
	flex-shrink: 0;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;

export const SearchForm = styled.form`
	padding-left: 16px;
	width: 70%;

	input {
		background: ${search};
		outline: 0;
		border-radius: 6px;
		padding: 7px 12px;
		width: 100%;

		&:focus {
			width: 318px;
		}

		transition: width 0.2s ease-out, color 0.2s ease-out;
	}
`;

const BotoesHeader = css`
	padding: 5px 16px;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	white-space: nowrap;
	cursor: pointer;
	border: 1px solid;
	border-radius: 6px;
	margin-left: 5px;
	width: 15%;
	color: ${white};
	outline: 0;
	overflow: hidden;

	&.mobile {
		display: flex;
		justify-content: center;
		@media (min-width: 1024px) {
			display: none;
		}
	}

	&.desktop {
		display: none;

		@media (min-width: 1024px) {
			display: unset;
		}
	}
`;

export const BotaoRepos = styled.button`
	${BotoesHeader};
`;
export const BotaoStarred = styled.button`
	${BotoesHeader};
`;
export const BotaoPesquisa = styled.button`
	${BotoesHeader};
`;

export const ContainerError = styled.div`
	background-color: ${pageError};
	height: 100vh;
	align-items: center;
	flex-direction: column;
	padding: 0px 15vw;
	display: flex;
	justify-content: center;
`;

export const ParagrafoError = styled.p`
	font-size: 25px;
	text-align: center;
`;

export const ContainerProfile = styled.div`
	padding: ${verticalPadding} ${horizontalPadding};
	overflow: hidden;
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 1280px;

	@media (min-width: 768px) {
		flex-direction: row;
	}
`;

export const LeftSide = styled.div`
	padding: 0 ${horizontalPadding};

	@media (min-width: 768px) {
		width: 25%;
	}
`;

export const RightSide = styled.div`
	padding: 0 ${horizontalPadding};

	@media (min-width: 768px) {
		width: 75%;
	}
`;

export const ReposGrid = styled.div`
	margin-top: ${verticalPadding};

	> h2 {
		font-size: 16px;
		font-weight: normal;
	}
	> div {
		margin-top: 8px;
		display: grid;
		grid-gap: 16px;

		grid-template-columns: 1fr;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}
`;

export const RepoAndStarred = styled.div`
	margin: ${verticalPadding};

	> div {
		margin-top: 8px;
		display: grid;
		grid-gap: 16px;

		grid-template-columns: 1fr;

		@media (min-width: 768px) {
			grid-template-columns: 1fr 1fr;
		}
	}
`;

export const ContainerProfileData = styled.div``;

export const Flex = styled.div`
	display: flex;
	align-items: center;

	> div {
		margin-left: 24px;

		> h1 {
			font-size: 26px;
			line-height: 1.25;
			color: ${grayDark};
			font-weight: 600;
		}
		> h2 {
			font-size: 20px;
			color: ${username};
			font-weight: 300;
		}
	}

	@media (min-width: 768px) {
		flex-direction: column;
		align-items: flex-start;

		> div {
			margin-left: 0;
			margin-top: 16px;
		}
	}
`;

export const Avatar = styled.img`
	width: 16%;
	border-radius: 50%;

	@media (min-width: 768px) {
		width: 100%;
		margin-top: -34px;
	}
`;

export const Row = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	margin: 20px 0;

	> li {
		display: flex;
		align-items: center;

		> span {
			font-size: 14px;
			color: ${gray};
		}
		> * {
			margin-right: 5px;
		}
	}
`;

export const Column = styled.ul`
	li {
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	li + li {
		margin-top: 10px;
	}
	span {
		margin-left: 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

const iconCSS = css`
	width: 16px;
	height: 16px;
	fill: ${icon};
	flex-shrink: 0;
`;

export const PeopleIcon = styled(RiGroupLine)`
	${iconCSS};
`;

export const CompanyIcon = styled(RiBuilding4Line)`
	${iconCSS};
`;

export const LocationIcon = styled(RiMapPin2Line)`
	${iconCSS};
`;

export const EmailIcon = styled(RiMailLine)`
	${iconCSS};
`;

export const BlogIcon = styled(RiLinksLine)`
	${iconCSS};
`;

export const RepoIcon = styled(RiBookMarkLine)`
	${iconCSS};
`;

export const SearchIcon = styled(RiSearchLine)`
	${iconCSS};
`;

export const StarIcon = styled(RiStarLine)`
	${iconCSS}
`;

export const ContainerRepoCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px;
	border: 1px solid ${border};
	border-radius: 6px;

	> header {
		display: flex;
		align-items: center;

		> p {
			margin-left: 8px;
			font-size: 14px;
			font-weight: 600;
			color: ${link};

			text-decoration: none;

			&:focus,
			&:hover {
				text-decoration: underline;
			}
		}
	}

	> p {
		margin: 8px 0 16px;
		font-size: 12px;
		color: ${gray};
		letter-spacing: 0.1px;
	}
`;

export const RepoIconTab = styled(RiBookMarkLine)`
	width: 16px;
	height: 16px;
	margin-right: 4px;
`;

export const Tab = styled.div`
	background: ${primary};

	.content {
		display: flex;
		align-items: center;
		width: min-content;
		padding: 14px 16px;
		border-bottom: 2px solid ${orange};

		.label {
			font-size: 14px;
			padding: 0 7px;
			font-weight: 600;
		}
		.number {
			font-size: 12px;
			background: ${ticker};
			padding: 2px 6px;
			border-radius: 24px;
		}
	}

	.line {
		display: flex;
		width: 200vw;
		border-bottom: 1px solid ${border};
		margin-left: -50vw;
	}

	&.mobile {
		margin-top: ${verticalPadding};

		.content {
			margin: 0 auto;
		}
		@media (min-width: 768px) {
			display: none;
		}
	}

	&.desktop {
		display: none;

		@media (min-width: 768px) {
			display: unset;

			.wrapper {
				display: flex;
				margin: 0 auto;
				max-width: 1280px;
			}

			.offset {
				width: 25%;
				margin-right: ${horizontalPadding};
			}
		}
	}
`;

export const ContainerRepos = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;

	> p {
		font-size: 16px;
	}
`;

export const Breadcrumb = styled.div`
	margin-bottom: 16px;
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	font-size: 18px;
`;
