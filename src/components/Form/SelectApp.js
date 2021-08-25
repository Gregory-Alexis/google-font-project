import React from "react"
import InputText from "./InputText"
import MenuSelect from "./MenuSelect"
import Range from "./Range"

const SelectApp = ({ sort, text, range, dispatch }) => {
	return (
		<div className="col-lg-3 mb-4">
			<div style={{ position: "sticky", top: "0px" }}>
				<MenuSelect sort={sort} dispatch={dispatch} />
				<InputText text={text} dispatch={dispatch} />
				<Range range={range} dispatch={dispatch} />
			</div>
		</div>
	)
}

export default SelectApp
