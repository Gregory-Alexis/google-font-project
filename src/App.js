import Header from "./components/Header"
import Footer from "./components/Footer"
import SelectApp from "./components/Form/SelectApp"

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<div className="container min-vh-100">
				<div className="row my-5">
					<div style={{ position: "sticky", top: "0px" }}>
						<SelectApp />
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
