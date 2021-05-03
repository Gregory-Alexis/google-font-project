import React from "react"

const Range = () => {
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
				value="24"
			></input>
		</div>
	)
}

export default Range
