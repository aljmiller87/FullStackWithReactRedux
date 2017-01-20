export const fetchCheeses = () => dispatch => {
	dispatch(actions.fetchCheesesRequest());
	return fetch('http://localhost:8080/cheeses')
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json();
		}).then(data => dispatch(actions.fetchCheesesSuccess))
		.catch(err =>
			dispatch(actions.fetchCheesesError(err))
		);
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS';
export const fetchCheesesSuccess = (list) => ({
	type: FETCH_CHEESES_SUCCESS,
	list: list
})

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR';
export const fetchCheesesError = (error) => ({
	type: FETCH_CHEESES_ERROR,
	error: error
})

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST';
export const fetchCheesesRequest = () => ({
	type: FETCH_CHEESES_REQUEST
})