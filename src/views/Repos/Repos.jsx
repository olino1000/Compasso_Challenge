import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { RepoAndStarred } from '../../styles';
import RepoCard from '../../components/RepoCard';
import api from '../../services/api';

function Repos() {
	const { username } = useParams();
 	const [data, setData] = useState();

	useEffect(() => {
		api
    	.get(`/users/${username}/repos`)
		.then(
      		(response) => {
        		setData({
            		repo: response.data 
				});
      		}
    	)
		.catch(() => {setData({error: 'Repositories not found or not authenticated!'})});
  	}, [username]);

  	if (data?.error) {
  	  return <h1>{data.error}</h1>;
  	}

  	if (!data?.repo) {
  	  return <h1>Loading...</h1>;
  	}

	return (
		<RepoAndStarred>
			<div>
			{data.repo.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                />
            ))}
			</div>
		</RepoAndStarred>
	);
}

export default Repos;
