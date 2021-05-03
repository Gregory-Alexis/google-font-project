import React from "react"

const InputText = () => {
	return (
		<div className="mb-3">
			<label className="fw-bold mb-3 form-label" htmlFor="text">
				Tapez votre text
			</label>
			<textarea id="text" className="form-control">
				Portez ce vieux whisky au juge blond qui fume !? 0123456789
			</textarea>
		</div>
	)
}

export default InputText
