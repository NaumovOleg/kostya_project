import React, { Component } from 'react';
import { connect } from 'react-redux';

import BreadCrumbs from '../helpers/breadCrumbs'
class Suppliers extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {

        const items = [
            {label:'Users'},
            {label:'Bride & Groom'},
        ];

        return (
            <section className='users__suppliers_section sub_section'>
                <BreadCrumbs items={items} >
                    {items}
                </BreadCrumbs>
                Suppliers
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Suppliers ) ;