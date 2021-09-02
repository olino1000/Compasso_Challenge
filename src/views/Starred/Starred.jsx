import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { RepoAndStarred } from '../../styles';
import RepoCard from '../../components/RepoCard';
import api from '../../services/api';

function Starred() {
	const { username } = useParams();
 	const [data, setData] = useState();

	useEffect(() => {
		api
    	.get(`/users/${username}/starred`)	
		.then(
      		(response) => {
        		setData({ starred: response.data });
      		}
    	)
		.catch(() => {setData({error: 'Starred Repositories not found or not authenticated!'})});;
  	}, [username]);

  	if (data?.error) {
  	  return <h1>{data.error}</h1>;
  	}

  	if (!data?.starred) {
  	  return <h1>Loading...</h1>;
  	}

	return (
		<RepoAndStarred>
			<div>
			{data.starred.map((item) => (
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

export default Starred;
