import Header from "./components/Header"
import Footer from "./components/Footer"
import FontApp from "./components/FontApp"

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className="container min-vh-100">
				<div className="row my-5">
					<div>
						<FontApp />
					</div>
				</div>
			</div>
			<footer>
				<Footer />
			</footer>
		</>
	)
}

export default App
