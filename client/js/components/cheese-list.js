import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/cheese';

export class CheeseList extends React.Component {
	// const items = props.list.map((item, index) =>
	// 		<li key={index}>{item}</li>
	// );
	componentDidMount(){
		this.props.dispatch(actions.fetchCheeses())
	}	
}

const mapStateToProps = (state, props) => ({
	cheese: state.cheese,
	loading: state.loading,
	error: state.error
});

export default connect(mapStateToProps)(CheeseList);