import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from "./helpers/breadCrumbs";
import * as actions from '../../store/actions/index'

class Notifications extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            message: '',
            sendTo: 0
        };
    }

    componentWillMount() {}

    sendMail = () => {
        if ( this.state.message !== '' ) {
            this.props.pushNotification( this.state )
        }

        this.setState( {
            message: '',
            sendTo: 0
        } )

    };

    render() {
        const items = [
            { label: 'Push Notification' },
        ];

        return (
            <section className='notifications_section'>
                <BreadCrumbs>
                    { items }
                </BreadCrumbs>
                <div className='push_notifications--container'>
                    <textarea value={ this.state.message } onChange={ el => {
                        this.setState( {
                            message: el.target.value
                        } )
                    } } className='text_area'/>
                    <div className='send_container'>
                        <span className='label'>Send to</span>
                        <select value={ this.state.sendTo } onChange={ el => {
                            this.setState( {
                                sendTo: el.target.value
                            } )
                        } }>
                            <option value="0">All USers</option>
                            <option value="1">Only to suppliers</option>
                            <option value="2">Only to bride/grooms</option>
                        </select>
                        <button onClick={ this.sendMail } className='send_notification_button'>Send</button>
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
        pushNotification: ( data ) => {
            dispatch( actions.pushNotification( data ) )
        }

    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Notifications );