import React from 'react';
import PropTypes from 'prop-types';
import { RepoIconTab } from '../../styles';

function TabContent({dados}) {
	return (
		<div className="content">
			<RepoIconTab/>
			<span className="label">Repositories</span>
			<span className="number">{dados}</span>
		</div>
	)
}

export default TabContent;

TabContent.propTypes = {
	dados: PropTypes.number.isRequired
};

