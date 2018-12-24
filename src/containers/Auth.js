import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoImage from '../images/auth/logo@3x.png'
import * as actions from "../store/actions";
import {withRouter} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Auth extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor ( props ) {
        super ( props );
        this.state = {
            email:'admin@beewed.com',
            password:'beewedadmin'
        };
    }
    handleClick = async () =>{

        const auth = await this.props.login( this.state );
        if( auth.success ){
            const { cookies } = this.props;
            cookies.set('BeeWedAuth__token', auth.token, { path: '/' });
        } else {

        }


    }

    componentWillMount () {

    }
    render () {


        return (
            <section className='auth_section'>
                <div className='auth_component'>
                    <div className='logo'>
                        <img src={logoImage}/>

                    </div>
                    <div className='text'>Sign In to Beewed Admin Panel</div>
                    <div className='sub-text'>Fill in the data below</div>

                    <input value={this.state.email} onChange={(el=>{
                        this.setState({
                            email:el.target.value
                        })
                    })} placeholder='Login'/>
                    <input type='password' onChange={(el=>{
                        this.setState({
                            password:el.target.value
                        })
                    })} value={this.state.password}  placeholder='Password'/>
                    <button onClick={this.handleClick}  className='submit_button'>Sign In</button>
                </div>
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
        login:(data)=>dispatch(  actions.login(data)  )
    };
};

export default  withRouter(withCookies(connect ( mapStateToProps, mapDispatchToProps ) ( Auth ) ));