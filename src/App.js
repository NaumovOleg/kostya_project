import React, {Component} from 'react';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { withCookies, Cookies } from 'react-cookie';
import * as actions from './store/actions/index';
import Layout from './hoc/Layout/Layout';
import Main from './containers/main';
import Auth from './containers/Auth';
import { instanceOf } from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faStroopwafel} from '@fortawesome/free-solid-svg-icons';
import {setAuthToken } from './store/actions/axios'
library.add(faStroopwafel);
class App extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);


    }

    componentDidMount() {


    }
    componentWillMount() {
        const { cookies } = this.props;
        const token =  cookies.get('BeeWedAuth__token');
        if( token !==null && token !==  undefined ) {
            setAuthToken( token );
            this.props.authStart({
                isAuthenticated: true,
                authChecking: false
            })

        }
    }

    render() {

        const {authChecking, isAuthenticated} = this.props;

        const spinner = (<div className="loading">
            <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="#EEEEEE"
                             animationDuration=".5s"/>
        </div>);

        const routes = isAuthenticated ? <Main  /> :
            (<Switch>
                <Route path="/auth" component={ Auth }/>
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
        isAuthenticated: state.auth.isAuthenticated,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        authStart:(data)=>dispatch(actions.authStart(data))
    };
};

export default withCookies(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
