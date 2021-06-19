import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settinds/Settings';
import Friends from './components/Friends/Friends';
import { Route } from 'react-router-dom'



const App = (props,) => {
	return (

		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route path='/dialogs' render={() => <Dialogs
					store={props.store}

				/>} />
				<Route path='/profile' render={() => <Profile
					profilePage={props.state.profilePage}
					dispatch={props.dispatch}
				/>} />
				<Route path='/news' render={() => <News />} />
				<Route path='/music' render={() => <Music />} />
				<Route path='/settings' render={() => <Settings />} />

				<Route path='/friends' render={() => <Friends
					state={props.state.sidebar} />} />

			</div>
		</div>

	)
}

export default App;
