import React, { Component } from 'react';
import { connect } from 'react-redux';


class Auth extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }
    render () {


        return (
            <div>
                Auth
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Auth ) ;