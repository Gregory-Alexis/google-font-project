import React from "react"
import InputText from "./InputText"
import MenuSelect from "./MenuSelect"
import Range from "./Range"

const SelectApp = ({ sort, setSort, text, setText, range, setRange }) => {
	return (
		<div className="col-lg-3 mb-4">
			<div style={{ position: "sticky", top: "0px" }}>
				<MenuSelect sort={sort} setSort={setSort} />
				<InputText text={text} setText={setText} />
				<Range range={range} setRange={setRange} />
			</div>
		</div>
	)
}

export default SelectApp
