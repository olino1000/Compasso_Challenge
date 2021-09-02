import React from 'react';
import PropTypes from 'prop-types';
import {
	ContainerProfileData,
	Flex,
	Avatar,
    Row,
	PeopleIcon,
	Column,
	CompanyIcon,
	LocationIcon,
	EmailIcon,
	BlogIcon,
} from '../../styles';

function ProfileData({ ...props }) {
	const {
		username,
		name,
		avatarUrl,
		followers,
		following,
		company,
		location,
		email,
		blog,
	} = props;

	return (
		<ContainerProfileData>
			<Flex>
				<Avatar src={avatarUrl} alt={username} />
				<div>
					<h1>{name}</h1>
					<h2>{username}</h2>
				</div>
			</Flex>
			<Row>
				<li>
					<PeopleIcon />
					<b>{followers}</b>
					<span>followers</span>
					<span>·</span>
				</li>
				<li>
					<b>{following}</b>
					<span>following</span>
				</li>
			</Row>
			<Column>
				{company && (
					<li>
						<CompanyIcon />
						<span>{company}</span>
					</li>
				)}
				{location && (
					<li>
						<LocationIcon />
						<span>{location}</span>
					</li>
				)}
				{email && (
					<li>
						<EmailIcon />
						<span>{email}</span>
					</li>
				)}
				{blog && (
					<li>
						<BlogIcon />
						<span>{blog}</span>
					</li>
				)}
			</Column>
		</ContainerProfileData>
	);
}

export default ProfileData;

ProfileData.propTypes = {
	username: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	avatarUrl: PropTypes.string.isRequired,
	followers: PropTypes.number.isRequired,
	following: PropTypes.number.isRequired,
	company: PropTypes.string,
	location: PropTypes.string,
	email: PropTypes.string,
	blog: PropTypes.string,
};

ProfileData.defaultProps = {
	company: PropTypes.string,
	location: PropTypes.string,
	email: PropTypes.string,
	blog: PropTypes.string,
}
