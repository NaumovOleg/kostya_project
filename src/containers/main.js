import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import RootConatiner from './main/rootConatiner'

class Main extends Component {

    constructor( props ) {
        super( props );
        this.state = {};
    }

    render() {
        const routes = (
            <Switch>
                <Route path="/" component={ RootConatiner }/>
                <Redirect to="/"/>
            </Switch>
        );
        return (
            <div>
                { routes }
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
    return {};
};
export default withRouter( connect( mapStateToProps, mapDispatchToProps )( Main ) );
