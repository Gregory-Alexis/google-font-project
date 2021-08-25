import React from "react"

const InputText = ({ text, dispatch }) => {
	const handleChange = (e) => {
		dispatch({ type: "TEXT", payload: e.target.value })
	}
	return (
		<div className="mb-3">
			<label className="fw-bold mb-3 form-label" htmlFor="text">
				Tapez votre text
			</label>
			<textarea
				id="text"
				className="form-control"
				value={text}
				onChange={handleChange}
			></textarea>
		</div>
	)
}

export default InputText
