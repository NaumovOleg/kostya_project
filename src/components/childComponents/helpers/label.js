import React, {Component} from 'react';
import userLabel from '../../../images/users/ic_amountUsers@3x.png'


class Label extends Component {


    render() {

        return (
            <div className='up_label row_conatiner'>
                <div className='image'>
                    <img src={userLabel}/>
                </div>
                <div className='text'>Amount of users</div>
                <div className='count'>{this.props.count}</div>
            </div>
        );
    }
}

export default Label;