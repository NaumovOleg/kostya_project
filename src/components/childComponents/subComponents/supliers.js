import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from '../helpers/breadCrumbs';
import Label from '../helpers/label'
import searchIcon from '../../../images/users/ic_search@3x.png';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import deleteIcon from '../../../images/users/ic_delete@3x.png'
import filterIcon from '../../../images/users/ic_filter@3x.png';
import { OverlayPanel } from "primereact/overlaypanel";
import { Paginator } from 'primereact/paginator';
import * as actions from '../../../store/actions/index'
import * as moment from 'moment'
import { Dialog } from "primereact/dialog";

class Suppliers extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            first: 0,
            useFilter: false,
            deleteSupplier: '',
            exactPage: 1,
            goToPage:1,
            params: {
                supplierType: '',
                page: 1,
                searchText: ''
            }
        };
    }

    componentWillMount() {
        this.props.getSuppliers( { page: 1 } );
    }

    componentWillUnmount() {
        this.props.initSuppliers( { count: 0, amount: 0, data: [] } )
    }

    handleRemove = ( el, event ) => {
        this.setState( {
            deleteSupplierVisible: true,
            deleteSupplier: el._id
        } )
    };

    confirmRemoveSupplier = () => {
        const { deleteSupplier } = this.state;
        this.setState( {
            deleteSupplierVisible: false,
            deleteSupplier: ''
        } );

        this.props.deleteUser( deleteSupplier, 'supplier' );

    };


    removeSell = ( rowData, column ) => {
        return (
            <div className='remove_icon' onClick={ this.handleRemove.bind( null, rowData ) }>
                <img src={ deleteIcon }/>
            </div>
        )
    };
    getTypeSell = ( rowData, column ) => {

        return (
            <div className='type'>
                { rowData.supplierType.title }
            </div>
        )
    };

    getDateSell = ( rowData ) => {
        const date = moment( rowData.registerDate ).format( 'DD.MM.Y' );
        return <div>{ date } </div>
    };

    returnParams = () => {
        const params = {
            page: this.state.params.page
        };
        if ( this.state.params.searchText !== '' ) {
            params.searchText = this.state.params.searchText
        }

        if ( this.state.params.supplierType !== '' ) {
            params.supplierType = this.state.params.supplierType
        }
        return params
    };


    render() {
        const suppliers = this.props.suppliers;
        const types = this.props.supplierTypes;
        const PagesCount = Math.floor( this.props.suppliers.count / 10 ) + 1;
        const items = [
            { label: 'Users' },
            { label: 'Suppliers' },
        ];
        return (
            <section className='users__suppliers_section sub_section'>
                <Dialog className='confirm_popup custom_popup' header="Delete User"
                        visible={ this.state.deleteSupplierVisible } width="535px" height='auto' modal={ true }
                        onHide={ ( e ) => this.setState( { deleteSupplierVisible: false } ) }>
                    <div className='label_text'>Are you sure you want to delete this user ?</div>
                    <button onClick={ this.confirmRemoveSupplier }
                            className='add_location_button location_button'>Delete
                    </button>
                </Dialog>
                <BreadCrumbs>
                    { items }
                </BreadCrumbs>
                <div className="suppliers_container column_container flex-start">
                    <Label count={ suppliers.amount }>
                        <div className='filter'>
                            <img src={ filterIcon }/>
                            <span className='text'>Filter</span>
                            <i className="pi pi-angle-down" onClick={ ( e ) => this.op.toggle( e ) }></i>
                            <OverlayPanel className='overlay_filter' ref={ ( el ) => this.op = el }>
                                <div className='item' onClick={ async ( e ) => {
                                   await this.setState( {
                                        useFilter: false,
                                        params: {
                                            ...this.state.params,
                                            supplierType: ''
                                        }
                                    } );
                                    this.op.toggle( e );
                                    const params = this.returnParams(  );
                                    this.props.getSuppliers( params );
                                } }
                                >none
                                </div>
                                {
                                    types.map( el => {
                                        return <div key={ el._id } className='item' onClick={ async ( e ) => {
                                            await this.setState( {
                                                useFilter: true,
                                                params: {
                                                    ...this.state.params,
                                                    supplierType: el._id
                                                }
                                            } );
                                            this.op.toggle( e );
                                            const params = this.returnParams();
                                            this.props.getSuppliers( params );

                                        } }
                                        >{ el.title }</div>
                                    } )
                                }

                            </OverlayPanel>
                        </div>
                    </Label>
                    <div className='search'>
                        <img src={ searchIcon } className='search_icon'/>
                        <input value={ this.state.params.searchText } onChange={ async el => {
                            await this.setState( {
                                params: {
                                    ...this.state.params,
                                    searchText: el.target.value,
                                    page: 1
                                },
                                first: 0
                            } );
                            const params = this.returnParams();
                            this.props.getSuppliers( params );

                        } } placeholder='Search'/>
                    </div>
                    <DataTable className='custom_table' value={ suppliers.data }>
                        <Column field="name" header="User Name" sortable={ true }/>
                        <Column className='register_date' field="registerDate" body={ this.getDateSell }
                                header="Register Date" sortable={ true }/>
                        <Column field="type" body={ this.getTypeSell } header="Type" sortable={ true }/>
                        <Column field="email" header="Email" sortable={ true }/>
                        <Column field="phone" header="Phone" sortable={ true }/>
                        <Column field="websiteURL" header="Web Site" sortable={ true }/>
                        <Column className='remove_column' body={ this.removeSell }/>
                    </DataTable>
                    <div className='paginator-container'>
                        <Paginator className='custom_paginator' rows={ 10 } totalRecords={ this.props.suppliers.count }
                                   first={ this.state.first }
                                   onPageChange={ async ( e ) => {
                                       await this.setState( {
                                           first: e.first,
                                           goToPage:e.page + 1,
                                           params: {
                                               ...this.state.params,
                                               page: e.page + 1
                                           }
                                       } );
                                       this.props.getSuppliers( this.returnParams( this.state ) )
                                   } }/>
                        <div className='right-paginator'>
                            <div className='text'>Go to page</div>
                            <input onChange={ async el => {
                                let value  = el.target.value ;
                                await this.setState({
                                    goToPage:value
                                });


                                if ( this.state.goToPage !== '' && value  <= PagesCount ) {
                                    await this.setState({
                                        params:{
                                            ...this.state.params,
                                            page:value
                                        },
                                        first:( value-1 )*10
                                    });
                                }
                                const params = this.returnParams();
                                this.props.getSuppliers( params )
                            } } value={ this.state.goToPage }/>
                            <div className='for_text'>for { PagesCount }</div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        suppliers: state.suppliers,
        supplierTypes: state.supplierTypes

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getSuppliers: ( page ) => dispatch( actions.getSuppliers( page ) ),
        initSuppliers: ( data ) => {
            dispatch( actions.initSuppliers( data ) )
        },
        deleteUser: ( id, type ) => {
            dispatch( actions.deleteUser( id, type ) )
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Suppliers );
