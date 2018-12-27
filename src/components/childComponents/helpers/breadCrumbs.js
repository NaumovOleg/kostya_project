import React, {Component} from 'react';
import {BreadCrumb} from 'primereact/breadcrumb';

class BreadCrumbs extends Component {
    render() {

        return (
            <div className='bread_crumbs column_container'>
                <BreadCrumb model={this.props.children} home={null}/>
            </div>
        );
    }
}

export default BreadCrumbs;