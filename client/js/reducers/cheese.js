import * as actions from '../actions/cheese';

const initialState = {
	cheese: [],
	loading: false,
	error: null
}

export const mainReducer = (state = initialState, action) => {
	if (action.type === actions.FETCH_CHEESES_REQUEST) {
		return {
			...state, loading: true
		}
	}

	if (action.type === actions.FETCH_CHEESES_SUCCESS) {
		return { 
			loading: false,
			error: null,
			cheese: action.list
		}
	}

	if (action.type === action.FETCH_CHEESES_ERROR) {
		return {
			...state,
			loading: false,
			error: action.error
		}
	}

	return state;
}