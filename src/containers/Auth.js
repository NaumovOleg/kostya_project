import React, { Component } from 'react';
import { connect } from 'react-redux';
import logoImage from '../images/auth/logo@3x.png'

class Auth extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {
            login:'',
            password:''
        };
    }
    handleClick =() =>{
        console.log( this.state)
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
                    <input value={this.state.login} onChange={(el=>{
                        this.setState({
                            login:el.target.value
                        })
                    })} placeholder='Login'/>
                    <input onChange={(el=>{
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


    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Auth ) ;