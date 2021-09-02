import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ContainerProfile, Main, LeftSide, RightSide, ReposGrid, Tab } from '../../styles';
import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import TabContent from '../../components/TabContent';
import api from '../../services/api';

function Profile() {
	const { username } = useParams();
	const [data, setData] = useState();

	useEffect(() => {
		Promise.all([
			api.get(`/users/${username}`),
			api.get(`/users/${username}/repos`),
		])
		.then(async(responses) => {
			const [userResponse, reposResponse] = responses;
			const user = await userResponse.data;
			const repos = await reposResponse.data;

			setData({
				user,
				repos,
			})
		})
		.catch(() => {setData({error: 'User not found or not authenticated!'})});
	}, [username]);

	if (data ?.error) {
		return <h1>{data.error}</h1>
	}

	if(!data?.user || !data?.repos) {
		return <h1>Loading...</h1>
	}

	function validaRepos() {
		if(data.repos.length === 0) {
			return <h1> No Repositories</h1>
		}
		if(data.repos.length > 0 && data.repos.length < 8){
			return (data.repos.map((item) =>(
				<RepoCard 
					key={item.name}
					username={item.owner.login}
					reponame={item.name}
					description={item.description}
				/>
			)))  
		}
		const slicedRepos = data.repos.slice(0, 8);
		return (slicedRepos.map((item) =>(
			<RepoCard 
				key={item.name}
				username={item.owner.login}
				reponame={item.name}
				description={item.description}
			/>
		)))
		
	}

	return (
		<ContainerProfile>
			<Tab className="desktop">
				<div className="wrapper">
					<span className="offset"/>
					<TabContent dados={data.user.public_repos}/>
				</div>
				<span className="line"/>
			</Tab>
			<Main>
				<LeftSide>
					<ProfileData
						username={data.user.login}
						name={data.user.name}
						avatarUrl={data.user.avatar_url}
						followers={data.user.followers}
						following={data.user.following}
						company={data.user.company}
						location={data.user.location}
						email={data.user.email}
						blog={data.user.blog}
					/>
				</LeftSide>
				<RightSide>
					<Tab className="mobile">
						<TabContent dados={data.user.public_repos}/>
						<span className="line"/>
					</Tab>
					<ReposGrid>
						<h2>Random Repositories</h2>
						<div>
							{validaRepos()}
						</div>
					</ReposGrid>
				</RightSide>
			</Main>
		</ContainerProfile>
	);
}

export default Profile;
