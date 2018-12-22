import React, {Component} from 'react';
import {connect} from 'react-redux';
import userImage from '../images/header/ill_photo@3x.png'
import {OverlayPanel} from 'primereact/overlaypanel';
import logOutIcon from '../images/header/ic_logout@3x.png'
class Header extends Component {
    state={
        iconStyle:''
    };

    componentDidMount() {


    }

    render() {

        return (
            <section className='header_section row_conatiner'>
                <div className="user_creds">
                    <span className="permission">Admin</span>
                    <img src={userImage}/>
                    <div className={this.state.iconStyle +' icon'} onClick={(e) => {
                        this.setState({
                            iconStyle:this.state.iconStyle===''?'transformed':''
                        });
                        this.op.toggle(e)}} >
                        <i className="pi pi-angle-down"></i>
                    </div>
                </div>
                <OverlayPanel  className='overlay' ref={(el) => this.op = el}>
                    <img  src={logOutIcon}/>
                        <button>Log Out</button>
                </OverlayPanel>
            </section>
        );
    }
};


const mapStateToProps = state => {
    return {


    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);