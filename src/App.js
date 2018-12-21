import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import Main from './containers/main';
import Auth from './containers/Auth';

import {ProgressSpinner} from 'primereact/progressspinner';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);


class App extends Component {


    componentDidMount() {
        const {authCheck} = this.props;

    }

    render() {

        const isAuthenticated = true;
        const authChecking = false;

        const spinner = (<div className="loading">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE"
                             animationDuration=".5s"/>
        </div>);

        const routes = isAuthenticated ? <Main  /> :
            (<Switch>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/auth"/>
            </Switch>);

        return (
            <div className="main-container">
                <div className="main-container__content">
                    <Layout>
                        {authChecking ? spinner : routes}
                    </Layout>
                </div>
            </div>
        );
    }
}
;


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.loggedIn,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(actions.authCheck()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
