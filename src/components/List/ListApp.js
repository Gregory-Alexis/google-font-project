import Card from "./Card"

const ListApp = ({ data, text, range, sort, error, loading, darkMode }) => {
	const title = () => {
		switch (sort) {
			case "date":
				return "Les plus récentes"
			case "popularity":
				return "Les plus populaires"
			case "trending":
				return "Top 10 trending"
			default:
				throw new Error("error: wrong selection")
		}
	}

	return (
		<div className="col-lg-9">
			<article className="row mb-5 ">
				<h2 className="mb-3">
					{loading && <p className="text-center fs-4 ">Loading...</p>}
					{error && <p>{error}</p>}

					<span
						className={
							darkMode ? "badge btn-warning text-dark" : "badge bg-danger"
						}
						value={sort}
					>
						{title()}
					</span>
				</h2>
				<Card data={data} text={text} range={range} darkMode={darkMode} />
			</article>
		</div>
	)
}

export default ListApp
