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
			<div className="form-check form-switch d-flex justify-content-end">
				<input
					className="form-check-input"
					type="checkbox"
					id="flexSwitchCheckChecked"
					onChange={handleDarkMode}
				/>
				<label
					className="form-check-label mx-2"
					htmlFor="flexSwitchCheckChecked"
				>
					{darkMode ? "🌞" : "🌙"}
				</label>
			</div>
		</header>
	)
}

export default Header
