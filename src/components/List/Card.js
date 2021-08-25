import React from "react"
import GoogleFontLoader from "react-google-font-loader"

const Card = ({ data, text, range, darkMode }) => {
	return data.map((el) => {
		return (
			<article key={el.family} className="col-lg-6 mb-4">
				<GoogleFontLoader fonts={[{ font: `${el.family}` }]} />
				<div className="shadow-sm border p-3 h-100">
					<h2 className="h6 d-flex aling-items-center justify-content-between">
						{el.family}
						<small>{el.variants.length} variant(s)</small>
					</h2>
					<p>
						<small
							className={
								darkMode ? "badge bg-warning text-dark" : "badge bg-dark"
							}
						>
							{el.category.toUpperCase()}
						</small>
					</p>

					<p
						className="sample"
						style={{
							fontSize: `${range}px`,
							fontFamily: `${el.family}`,
						}}
					>
						{text}
					</p>
					<a
						href={`https://fonts.google.com/specimen/${el.family}`}
						rel="noopener noreferrer"
						target="_blank"
						className={darkMode ? "text-warning" : "text-danger"}
					>
						Voir sur Google Fonts (ouvre un nouveau tab)
					</a>
				</div>
			</article>
		)
	})
}

export default Card
