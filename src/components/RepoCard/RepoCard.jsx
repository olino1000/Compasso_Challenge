import React from 'react';
import PropTypes from 'prop-types';
import { ContainerRepoCard, RepoIcon } from '../../styles';

function RepoCard({ ...props }) {
	const {
		reponame,
		description,

	} = props;

	return (
		<ContainerRepoCard>
			<header>
				<RepoIcon />
				<p>{reponame}</p>
			</header>
			<p>{description}</p>
		</ContainerRepoCard>
	)
	
}

export default RepoCard;

RepoCard.propTypes = {
	reponame: PropTypes.string.isRequired,
	description: PropTypes.string,
};

RepoCard.defaultProps = {
	description: PropTypes.string,
}

