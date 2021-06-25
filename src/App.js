import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settinds/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Friends from './components/Friends/Friends';
import { Route } from 'react-router-dom'




const App = (props) => {
	return (
		
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <DialogsContainer
					// store={props.store}
				/>} />
				<Route path='/profile' render={() => <Profile
					// store={props.store}
					// profilePage={props.state.profilePage}
					// dispatch={props.dispatch}
				/>} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings /> } />
				<Route path='/users' render={() => <UsersContainer/> } />	
				<Route path='/friends' render={() => <Friends
					state={props.state.sidebar} />} />

			</div>
		</div>
		
	)
}

export default App;
