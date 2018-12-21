import React, { Component } from 'react';
import { connect } from 'react-redux';
class Locations extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {


        return (
            <div>
                Locations
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Locations ) ;