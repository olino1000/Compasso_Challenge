import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Pagina404 from './views/Pagina404';
import Header from './components/Header';
import Profile from './views/Profile';
import Repos from './views/Repos';
import Starred from './views/Starred';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route exact path="/">
					<h1>CLIQUE NO ÍCONE DO GITHUB PARA SE AUTENTICAR</h1>
				</Route>
				<Route exact path="/:username">
					<Profile />
				</Route>
				<Route exact path="/:username/repos">
					<Repos />
				</Route>
				<Route exact path="/:username/starred">
					<Starred />
				</Route>
				<Route>
					<Pagina404 />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
