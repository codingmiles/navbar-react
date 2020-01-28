import React, { useState } from 'react'

import NavBar from './components/NavBar'

import GlobalStyles from './styles/Global'

const App = function () {
	const [isOpen, setIsOpen] = useState(false)

	const handleNavbar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<NavBar
				isOpen={isOpen}
				handleNavbar={() => handleNavbar()}
			/>
			<GlobalStyles/>
		</>
	)
}

export default App
