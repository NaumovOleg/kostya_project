import React, {Component} from 'react';
import {connect} from 'react-redux';
import BreadCrumbs from '../helpers/breadCrumbs';
import Label from '../helpers/label'
import searchIcon from '../../../images/users/ic_search@3x.png';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import deleteIcon from '../../../images/users/ic_delete@3x.png'
import filterIcon from '../../../images/users/ic_filter@3x.png';
import {OverlayPanel} from "primereact/overlaypanel";
import logOutIcon from "../../../images/header/ic_logout@3x.png";
import {Paginator} from 'primereact/paginator';
import * as actions from '../../../store/actions/index'
import {Button} from 'primereact/button';
import * as moment from 'moment'

class Suppliers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterValue: '',
            useFilter: false,
        };
    }
    componentWillMount() {
        this.props.getSuppliers();
    }
    componentWillUnmount() {
        this.props.initSuppliers({amount:0, data:[]})
    }
    handleRemove = (el, event) => {
        console.log(el._id)
    };
    removeSell = (rowData, column) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData)}>
                <img src={deleteIcon}/>
            </div>
        )
    };
    getTypeSell = (rowData, column) => {

        return (
            <div className='type'>
                {rowData.supplierType.title}
            </div>
        )
    };

    getDateSell = (rowData) => {
        const date = moment(rowData.registerDate).format('d.mm.Y')
        return <div>{date} </div>
    };
    render() {
        const data = this.props.suppliers.data;
        const amount = this.props.suppliers.amount;

        const items = [
            {label: 'Users'},
            {label: 'Suppliers'},
        ];

        const filterItems = [
            {
                id: 'photographer',
                name: 'Photographer'
            },
            {
                id: 'videographer',
                name: 'Videographer'
            },
            {
                id: 'beauty',
                name: 'Beauty & Make Up'
            },
            {
                id: 'Band',
                name: 'Band'
            },
        ];

        return (
            <section className='users__suppliers_section sub_section'>
                <BreadCrumbs>
                    {items}
                </BreadCrumbs>
                <div className="suppliers_container column_container flex-start">
                    <Label count={amount}>
                        <div className='filter'>
                            <img src={filterIcon}/>
                            <span className='text'>Filter</span>
                            <i className="pi pi-angle-down" onClick={(e) => this.op.toggle(e)}></i>
                            <OverlayPanel className='overlay_filter' ref={(el) => this.op = el}>
                                {
                                    filterItems.map(el => {
                                        return <div key={el.id} className='item' onClick={(e) => {
                                            this.setState({
                                                filterValue: el.id,
                                                useFilter: true
                                            });
                                            this.op.toggle(e)
                                        }}
                                        >{el.name}</div>
                                    })
                                }

                            </OverlayPanel>

                        </div>
                    </Label>
                    <div className='search'>
                        <img src={searchIcon} className='search_icon'/>
                        <input placeholder='Search'></input>


                    </div>
                    <DataTable paginator={true} rows={10}
                               rowsPerPageOptions={[5, 10, 20]} className='custom_table' value={data}>
                        <Column field="name" header="User Name" sortable={true}/>
                        <Column field="registerDate" body={this.getDateSell} header="Register Date" sortable={true}/>
                        <Column field="type" body={this.getTypeSell} header="Type" sortable={true}/>
                        <Column field="email" header="Email" sortable={true}/>
                        <Column field="phone" header="Phone" sortable={true}/>
                        <Column field="websiteURL" header="Web Site" sortable={true}/>
                        <Column className='remove_column' body={this.removeSell}/>
                    </DataTable>
                    {/*<div className='custom_paginator--container'>*/}
                    {/*<Paginator className='custom_paginator' rows={10} totalRecords={1200}*/}
                    {/*first={this.state.first}*/}

                    {/*onPageChange={(e) => {*/}
                    {/*this.setState({first: e.first})*/}
                    {/*}}/>*/}
                    {/*</div>*/}


                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        suppliers: state.suppliers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSuppliers: () => dispatch(actions.getSuppliers()),
        initSuppliers: (data) => {
            dispatch(actions.initSuppliers(data))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);