import React from "react"
import SelectApp from "./Form/SelectApp"
import ListApp from "./List/ListApp"
import { useEffect, useReducer } from "react"
import reducer from "./Reducer"
import axios from "axios"

/* eslint-disable */
const FontApp = ({ darkMode }) => {
	const [state, dispatch] = useReducer(reducer, {
		data: [],
		loading: false,
		error: "",
		sort: "popularity",
		range: 20,
		text: "Portez ce vieux whisky au juge blond qui fume !? 0123456789",
	})

	const { data, loading, error, sort, range, text } = state
	const url = `https://webfonts.googleapis.com/v1/webfonts?sort=${sort}&key=${process.env.REACT_APP_FONT_API}`

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" })
			try {
				const response = await axios(url)
				dispatch({
					type: "FETCH_SUCESS",
					payload: response,
				})
			} catch (error) {
				dispatch({ type: "FETCH_FAILURE", payload: error.message })
			}
		}
		fetchData()
	}, [url])

	return (
		<section>
			<div className="row my-5">
				<SelectApp
					data={data}
					sort={sort}
					dispatch={dispatch}
					text={text}
					range={range}
				/>
				<ListApp
					data={data}
					sort={sort}
					dispatch={dispatch}
					text={text}
					range={range}
					loading={loading}
					error={error}
					darkMode={darkMode}
				/>
			</div>
		</section>
	)
}

export default FontApp
