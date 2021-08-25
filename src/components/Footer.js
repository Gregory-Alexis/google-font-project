const Footer = ({ darkMode }) => {
	return (
		<footer
			className={
				darkMode
					? "text-center bg-warning text-dark p-3 pb-1"
					: "text-center bg-dark text-white p-3 pb-1"
			}
		>
			<p>Site créé par Grégory Alexis</p>
		</footer>
	)
}

export default Footer
