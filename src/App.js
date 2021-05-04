import Header from "./components/Header"
import Footer from "./components/Footer"
import FontApp from "./components/FontApp"
import { useState } from "react"

function App() {
	const [darkMode, setDarkMode] = useState(false)
	const handleDarkMode = () => {
		setDarkMode(!darkMode)
	}
	const modeColor = darkMode ? "bg-dark text-white" : "bg-white"

	return (
		<>
			<section className={modeColor}>
				<Header handleDarkMode={handleDarkMode} darkMode={darkMode} />
				<div className="container min-vh-100">
					<div className="row">
						<FontApp darkMode={darkMode} />
					</div>
				</div>
			</section>
			<Footer darkMode={darkMode} />
		</>
	)
}

export default App
