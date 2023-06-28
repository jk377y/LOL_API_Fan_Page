import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Champions from './Pages/Champions/Champions'
import Resources from './Pages/Resources/Resources'

function App() {

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/champions" element={<Champions />} />
				<Route path="/resources" element={<Resources />} />
			</Routes>
		</>
	)
}

export default App
