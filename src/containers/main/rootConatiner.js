import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar';
import Header from '../../components/Header';
import Users from '../../components/childComponents/users';
import Locations from '../../components/childComponents/locations';
import Notifications from '../../components/childComponents/push_notifications';
import SuppliersTypes from '../../components/childComponents/suppliers_types'

class RootConatiner extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

    }


    render() {

        const routes = (

            <Switch>
                {/* <Route path="/auth" component={Auth} /> */}
                <Route path="/users" component={Users}/>
                <Route path="/locations" component={Locations}/>
                <Route path="/suppliers" component={SuppliersTypes}/>
                <Route path="/notifications" component={Notifications}/>

                <Redirect to="/users"/>
            </Switch>
        );
        return (
            <section className='root__container row_conatiner flex-start'>
                <NavigationBar/>
                <section className='components__container column_container' >
                    <Header/>
                    <div className='components'>

                        {routes}

                    </div>
                </section>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RootConatiner));