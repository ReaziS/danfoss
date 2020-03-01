import React, { Component } from 'react';
import { connect } from 'react-redux';

class Test extends Component {
    render() {
        return (
            <div>Test component</div>
        )
    }
}

export default connect(
    state => ({
        currentState: state,
    }),
    dispatch => ({})
)(Test)