import React from "react"
import SelectApp from "./Form/SelectApp"
import ListApp from "./List/ListApp"
import { useEffect, useState } from "react"

const FontApp = ({ darkMode }) => {
	const [sort, setSort] = useState("popularity")
	const url = `https://webfonts.googleapis.com/v1/webfonts?sort=${sort}&key=${process.env.REACT_APP_FONT_API}`
	const [data, setData] = useState([])
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [text, setText] = useState(
		"Portez ce vieux whisky au juge blond qui fume !? 0123456789"
	)
	const [range, setRange] = useState(20)

	useEffect(() => {
		setLoading(true)

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Invalid url ${response.status}`)
				}
				return response.json()
			})
			.then((data) => {
				setData(() => data.items.slice(0, 10))
			})
			.catch((error) => {
				setError(error.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [url])

	return (
		<section>
			<div className="row my-5">
				<SelectApp
					data={data}
					sort={sort}
					setSort={setSort}
					text={text}
					setText={setText}
					range={range}
					setRange={setRange}
				/>
				<ListApp
					data={data}
					sort={sort}
					setSort={setSort}
					text={text}
					range={range}
					setRange={setRange}
					loading={loading}
					error={error}
					darkMode={darkMode}
				/>
			</div>
		</section>
	)
}

export default FontApp
