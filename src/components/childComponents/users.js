import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Suppliers from './subComponents/supliers'
import Bridge_groom from './subComponents/bridge_groom'

class Users extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    componentWillMount() {
    }

    render() {
        const routes = (
            <Switch>
                <Route path="/users/groom" component={ Bridge_groom }/>
                <Route path="/users/suppliers" component={ Suppliers }/>
                <Redirect to="/users/suppliers"/>
            </Switch>
        );
        return (
            <section className='users_section'>
                { routes }
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
    return {};
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Users ) );