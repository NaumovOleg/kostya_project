import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoImage from '../images/auth/logo@3x.png'

class Auth extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
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
                    <input placeholder='Login'/>
                    <input placeholder='Password'/>
                    <button className='submit_button'>Sign In</button>
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


    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Auth ) ;