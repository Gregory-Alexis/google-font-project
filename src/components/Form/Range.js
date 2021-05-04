const Range = ({ range, setRange }) => {
	const handleChange = (e) => {
		setRange(e.target.value)
	}

	return (
		<div className="mb-3">
			<label className="fw-bold mb-3 form-label" htmlFor="range">
				La taille de police
			</label>
			<input
				type="range"
				className="form-range"
				id="range"
				min="8"
				max="48"
				step="1"
				value={range}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Range
