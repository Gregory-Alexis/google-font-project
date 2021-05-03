import React, { useEffect, useState } from "react"

const ListApp = () => {
	const url = `https://webfonts.googleapis.com/v1/webfonts?sort=popularity&key=AIzaSyBFv26wh62iDoGPOxIZgAVKttXZ6GgINfI`
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
				setData(() => data.items.slice(0, 10))
				console.log(data)
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
				return (
					<article key={el}>
						<p>{el.family}</p>
					</article>
				)
			})}
		</div>
	)
}

export default ListApp
