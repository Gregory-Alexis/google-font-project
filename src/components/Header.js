const Header = ({ handleDarkMode, darkMode }) => {
	return (
		<header
			className={
				darkMode
					? "bg-warning text-dark text-center p-5"
					: "bg-danger text-white text-center p-5"
			}
		>
			<h1 className="display-1">Quoi de neuf, Google Fonts™ ?</h1>
			<p className="h4">
				Les plus récentes, les plus <i>trendy</i> et les plus populaires polices
				Google.
			</p>
			<button
				type="button"
				className="btn-dark rounded-circle d-flex ms-auto"
				onClick={handleDarkMode}
				data-bs-container="body"
				data-bs-toggle="popover"
				data-bs-placement="top"
				data-bs-content="Top popover"
			>
				{darkMode ? "🌞" : "🌙"}
			</button>
		</header>
	)
}

export default Header
