import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerHeader, GithubLogo, SearchForm, BotaoRepos, BotaoStarred, RepoIcon, StarIcon } from '../../styles';
import githubProvider from '../../config/authMethods'
import socialMediaAuth from '../../services/auth'

function Header() {
	
	const [search, setSearch] = useState('');
  	const navigate = useNavigate();

  	function handleSubmit(event) {
   		event.preventDefault();
		   
   		navigate(`/${search.toLowerCase().trim()}`);
 	}

	function handleClickRepos(event) {
		event.preventDefault();

		if(search !== '') navigate(`/${search.toLowerCase().trim()}/repos`);
 	}

	function handleClickStarred(event) {
		event.preventDefault();

		if(search !== '') navigate(`/${search.toLowerCase().trim()}/starred`);
 	}

	const handleOnClick = async (provider) => {
		const res =  await socialMediaAuth(provider);
		localStorage.setItem('access_token', res);
	}

	return (
		<ContainerHeader>
			<GithubLogo onClick={() => handleOnClick(githubProvider)}/>
			<SearchForm onSubmit={handleSubmit}>
				<input placeholder="Enter Username or Repo..." 
				value={search}
          		onChange={(e) => setSearch(e.currentTarget.value)}/>
			</SearchForm>
			<BotaoRepos className='mobile' onClick={handleClickRepos}><RepoIcon/></BotaoRepos>
			<BotaoStarred className='mobile' onClick={handleClickStarred}><StarIcon/></BotaoStarred>
			<BotaoRepos className='desktop' onClick={handleClickRepos}>All Repos</BotaoRepos>
			<BotaoStarred className='desktop' onClick={handleClickStarred}>Starred Repos</BotaoStarred>
		</ContainerHeader>
	);
}

export default Header;
