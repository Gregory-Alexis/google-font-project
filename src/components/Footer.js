const Footer = ({ darkMode }) => {
	return (
		<footer
			className={
				darkMode
					? "text-center bg-warning text-dark p-4"
					: "text-center bg-dark text-white p-4"
			}
		>
			<p>Site créé par Grégory Alexis</p>
		</footer>
	)
}

export default Footer
