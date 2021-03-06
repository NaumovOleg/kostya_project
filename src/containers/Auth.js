import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoImage from '../images/auth/logo@3x.png'
import * as actions from "../store/actions";
import {Messages} from 'primereact/messages';
import { withRouter } from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class Auth extends Component {
    static propTypes = {
        cookies: instanceOf( Cookies ).isRequired
    };

    constructor( props ) {
        super( props );
        this.state = {
            disabled:true,
            email: '',
            password: ''
        };
    }

    checkFillings = ()=>{

        console.log( this.state )
        if( this.state.email === '' || this.state.password ==='' ){
            this.setState({
                disabled :true
            })
        } else {
            this.setState({
                disabled :false
            })
        }

    };

    handleClick = async () => {

        const auth = await this.props.login( this.state );
        if ( auth.success ) {
            const { cookies } = this.props;
            cookies.set( 'BeeWedAuth__token', auth.token, { path: '/' } );
        }
        if( auth.error ){

            this.messages.show({severity: 'error',life: 5000, summary: auth.message.title, detail: auth.message.message});

        }
    };

    handleLogin = async (el) =>{
       await  this.setState( {
            email: el.target.value
        } );

        this.checkFillings()
    };
    handlePassword = async (el )=>{
        await  this.setState( {
            password: el.target.value
        } );

        this.checkFillings()
    }

    componentWillMount() {}

    render() {
        return (
            <section className='auth_section'>
                <Messages ref={(el) => this.messages = el} />
                <div className='auth_component'>
                    <div className='logo'>
                        <img src={ logoImage }/>
                    </div>
                    <div className='text'>Sign In to Beewed Admin Panel</div>
                    <div className='sub-text'>Fill in the data below</div>

                    <input value={ this.state.email } onChange={ this.handleLogin } placeholder='Login'/>
                    <input type='password' onChange={ this.handlePassword } value={ this.state.password } placeholder='Password'/>
                    <button disabled={ this.state.disabled} onClick={ this.handleClick } className='submit_button'>Sign In</button>
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
        login: ( data ) => dispatch( actions.login( data ) )
    };
};

export default withRouter( withCookies( connect( mapStateToProps, mapDispatchToProps )( Auth ) ) );