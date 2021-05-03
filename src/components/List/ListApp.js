import React, { useEffect, useState } from "react"

const ListApp = () => {
	const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBFv26wh62iDoGPOxIZgAVKttXZ6GgINfI`
	const [data, setData] = useState([])
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)

		fetch(url)
			.then((response) => {
				console.log(response)
				if (!response.ok) {
					throw new Error(`Invalid url ${response.status}`)
				}
				return response.json()
			})
			.then((data) => {
				console.log(data)
				setData(data)
			})
			.catch((error) => {
				setError(error.message)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	return (
		<div>
			{data.map((el) => {
				return <p>{el.kind}</p>
			})}
		</div>
	)
}

export default ListApp
