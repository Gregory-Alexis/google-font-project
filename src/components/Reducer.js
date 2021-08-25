const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return {
				...state,
				loading: true,
			}
		case "FETCH_SUCESS":
			return {
				...state,
				loading: false,
				error: false,
				data: action.payload.data.items.slice(0, 10),
			}
		case "FETCH_FAILURE":
			return {
				...state,
				error: action.payload,
			}
		case "SORT":
			return {
				...state,
				sort: action.payload,
			}
		case "RANGE":
			return {
				...state,
				range: action.payload,
			}
		case "TEXT":
			return {
				...state,
				text: action.payload,
			}
		default:
			throw new Error(`Unsupported action type ${action.type}`)
	}
}
export default reducer
