import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import Main from './containers/main';
import Auth from './containers/Auth';
import { instanceOf } from 'prop-types';
import { ProgressSpinner } from 'primereact/progressspinner';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import * as R from 'ramda'
import { setAuthToken } from './store/actions/axios'

library.add( faStroopwafel );

class App extends Component {
    static propTypes = {
        cookies: instanceOf( Cookies ).isRequired
    };

    constructor( props ) {
        super( props );
    }

    componentDidMount() {}

    componentWillMount() {
        const { cookies } = this.props;
        const token = cookies.get( 'BeeWedAuth__token' );
        if ( token !== null && token !== undefined ) {
            const authentificate = R.curry( this.initAuth )( token );
            this.props.checkAuth( token, authentificate )
        } else {
            this.props.authStart( {
                isAuthenticated: false,
                authChecking: false
            } )
        }
    }

    initAuth = ( token, data ) => {
        if ( data ) {
            setAuthToken( token );
            this.props.authStart( {
                isAuthenticated: true,
                authChecking: false
            } )
        } else {
            this.props.authStart( {
                isAuthenticated: false,
                authChecking: false
            } )
        }
    };

    render() {
        const { authChecking, isAuthenticated } = this.props;
        const spinner = ( <div className="loading">
            <ProgressSpinner style={ { width: '100px', height: '100px' } } strokeWidth="8" fill="#EEEEEE"
                             animationDuration=".5s"/>
        </div> );
        if ( authChecking ) {
            return ( spinner )
        }
        const routes = isAuthenticated ? <Main/> :
            ( <Switch>
                <Route path="/auth" component={ Auth }/>
                <Redirect to="/auth"/>
            </Switch> );

        return (
            <div className="main-container">
                <div className="main-container__content">
                    <Layout>
                        { authChecking ? spinner : routes }
                    </Layout>
                </div>
            </div>
        );
    }
};


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        authChecking: state.auth.authChecking
    };
};

const mapDispatchToProps = dispatch => {
    return {
        authStart: ( data ) => dispatch( actions.authStart( data ) ),
        checkAuth: ( data, cb ) => {
            dispatch( actions.checkAuth( data, cb ) )
        }
    };
};

export default withCookies( withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) ) );
