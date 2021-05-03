import React from "react"
import InputText from "./InputText"
import MenuSelect from "./MenuSelect"
import Range from "./Range"

const SelectApp = () => {
	return (
		<div className="col-lg-3 mb-4">
			<MenuSelect />
			<InputText />
			<Range />
		</div>
	)
}

export default SelectApp
