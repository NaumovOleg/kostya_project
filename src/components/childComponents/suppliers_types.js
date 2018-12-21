import React, { Component } from 'react';
import { connect } from 'react-redux';

class SuppliersTypes extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {

        return (
            <div>
                SuppliersTypes
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( SuppliersTypes ) ;