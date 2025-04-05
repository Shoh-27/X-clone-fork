import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import LeftSidebar from './components/layout/LeftSidebar'
import RightSidebar from './components/layout/RightSidebar'
import XHomepage from './components/pages/Xhomepage'
import Explore from './components/pages/Explore'
import Notifications from './components/pages/Notifications'
import Profile from './components/pages/Profile'
function App() {
	return (
		<Router>
			<div className='flex  min-h-screen max-w-7xl mx-auto'>
				<LeftSidebar />
				<main className='flex-1'>
					<Routes>
						<Route path='/' element={<XHomepage />} />
						<Route path='/profile/*' element={<Profile />} />
						<Route path='/explore/*' element={<Explore />} />
						<Route path='/notifications/*' element={<Notifications />} />
					</Routes>
				</main>
				<RightSidebar />
			</div>
		</Router>
	)
}

export default App
