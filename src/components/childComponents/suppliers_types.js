import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from "./helpers/breadCrumbs";

class SuppliersTypes extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {
        const items = [
            {label:'Supplier Type'},
        ];
        return (
            <section className='suppliers_section'>
                <BreadCrumbs  >
                    {items}
                </BreadCrumbs>
            </section>
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