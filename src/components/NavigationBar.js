import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/Logo@3x.png'
import userIcon from '../images/navigation_bar/ic_user@3x.png';
import locationIcon from '../images/navigation_bar/ic_location@3x.png';
import suppliersIcon from '../images/navigation_bar/ic_supplierTypes@3x.png';
import notificationsIcon from '../images/navigation_bar/ic_pushNotification@3x.png'

class NavigationBar extends Component {


    componentDidMount() {}

    render() {

        return (
            <section className='naivigation-bar'>
                <div className="nav_header">
                    <img src={ logo } className="logo"/>
                    <div className="logo_menu">
                        <i className="pi pi-bars"></i>
                    </div>
                </div>
                <div className="nav_menu">
                    <ul>
                        <li className='width_sub-menu'>
                            <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                     to="/users">
                                <div className='main_link'>
                                    <div className="icon">
                                        <img src={ userIcon }/>
                                    </div>
                                    <div className="dropdown">
                                        <div className="text">
                                            <span>
                                                 Users
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className='sub_links'>
                                    <NavLink className="sub-navigation-menu"
                                             activeClassName="sub-navigation__selected"
                                             to="/users/suppliers">
                                        <div className='dot'></div>

                                        <div className="text"> Suppliers</div>
                                    </NavLink>
                                    <NavLink className="sub-navigation-menu"
                                             activeClassName="sub-navigation__selected"
                                             to="/users/groom">
                                        <div className='dot'></div>
                                        <div className="text">Bride & Groom</div>
                                    </NavLink>
                                </div>
                            </NavLink>
                        </li>
                        <li className='simple_menu'>
                            <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                     to="/locations">
                                <div className="icon">
                                    <img src={ locationIcon }/>
                                </div>
                                <div className="text">Locations</div>
                            </NavLink>
                        </li>
                        <li className='simple_menu'>
                            <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                     to="/suppliers">
                                <div className="icon">
                                    <img src={ suppliersIcon }/>
                                </div>
                                <div className="text">Supplier Type</div>
                            </NavLink>
                        </li>
                        <li className='simple_menu'>
                            <NavLink className="header-navigation-menu" activeClassName="header-navigation__selected"
                                     to="/notifications">
                                <div className="icon">
                                    <img src={ notificationsIcon }/>
                                </div>
                                <div className="text">Push Notifications</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
};


const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( NavigationBar ) );