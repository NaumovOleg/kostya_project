import React, { Component } from 'react';
import { connect } from 'react-redux';

class Bridge_groom extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {


        return (
            <div>
                Bridge_groom
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Bridge_groom ) ;