import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from "./helpers/breadCrumbs";

class Notifications extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }





    render () {
        const items = [
            {label:'Push Notification'},
        ];

        return (
            <section className='notifications_section'>
                <BreadCrumbs  >
                    {items}
                </BreadCrumbs>
                <div className='push_notifications--container'>
                    <textarea className='text_area'></textarea>
                    <div className='send_container'>
                        <span className='label'>Send to</span>
                        <select>
                            <option value="volvo">All USers</option>
                            <option value="saab">Only to suppliers</option>
                            <option value="mercedes">Only to bride/grooms</option>
                            <option value="audi">None</option>
                        </select>
                        <button className='send_notification_button'>Send</button>

                    </div>
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

export default connect ( mapStateToProps, mapDispatchToProps ) ( Notifications ) ;