import React, { Component } from 'react';
import { connect } from 'react-redux';
import userImage from '../images/header/ill_photo@3x.png'
import { OverlayPanel } from 'primereact/overlaypanel';
import logOutIcon from '../images/header/ic_logout@3x.png';
import * as actions from '../store/actions/index'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from "prop-types";

import downArrow from '../images/common/ic_arrowBottom@3x.png'

class Header extends Component {
    state = {
        iconStyle: ''
    };
    static propTypes = {
        cookies: instanceOf( Cookies ).isRequired
    };

    componentDidMount() {
    }

    logOut = async () => {
        const loggendOut = await this.props.logOut();
        const { cookies } = this.props;
        cookies.remove( 'BeeWedAuth__token' );
        this.props.authStart( {
            isAuthenticated: false,
            authChecking: false
        } );
    };

    render() {
        return (
            <section className='header_section row_conatiner'>
                <div className="user_creds">
                    <span className="permission">Admin</span>
                    <img src={ userImage }/>
                    <div className={ this.state.iconStyle + ' icon' } onClick={ ( e ) => {
                        this.setState( {
                            iconStyle: this.state.iconStyle === '' ? 'transformed' : ''
                        } );
                        this.op.toggle( e )
                    } }>
                        <img style={{width:'8.5px',height:'5px'}} src={downArrow}/>
                    </div>
                </div>
                <OverlayPanel className='overlay' ref={ ( el ) => this.op = el }>
                    <div onClick={ this.logOut }>
                        <img src={ logOutIcon }/>
                        <button>Log Out</button>
                    </div>
                </OverlayPanel>
            </section>
        );
    }
};


const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch( actions.logOut() ),
        authStart: ( data ) => dispatch( actions.authStart( data ) )
    };
};

export default withCookies( connect( mapStateToProps, mapDispatchToProps )( Header ) );