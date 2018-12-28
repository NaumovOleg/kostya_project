import React, {Component} from 'react';
import {connect} from 'react-redux';
import BreadCrumbs from '../helpers/breadCrumbs';
import Label from '../helpers/label'
import searchIcon from "../../../images/users/ic_search@3x.png";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import deleteIcon from "../../../images/users/ic_delete@3x.png";
import *  as actions from '../../../store/actions/index'
import * as moment from "moment";
import {Paginator} from "primereact/paginator";
import {Dialog} from "primereact/dialog";

class Bridge_groom extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            deleteBride :'',
            deleteBrideVisible:false,
            goToPage:1,
            params:{
                supplierType:'',
                page:1,
                searchText:''
            }
        };
    }

    componentDidMount( ) {
       this.props.getBrideGroom({ page:1 } );
    }

    componentWillUnmount( ) {
        this.props.initBrideGroom({
            data:[],
            amount:0
        })
    }

    handleRemove = ( el, event ) => {
        this.setState({
            deleteBride :el._id ,
            deleteBrideVisible:true,
        })
    };
    removeSell = ( rowData, column ) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData)}>
                <img src={deleteIcon}/>
            </div>
        )
    };
    getDateRegisterSell=( rowData )=>{
        const date =  moment( rowData.registerDate  ).format('d.mm.Y');
        return <div>{  date } </div>
    };
    getDateWeedingSell=( rowData )=>{
        const date =  moment( rowData.weddingDate  ).format('d.mm.Y');
        return <div>{  date } </div>
    };
    confirmRemoveBride = ()=>{
        this.props.deleteUser(this.state.deleteBride , 'bride');
        this.setState({
            deleteBrideVisible:false
        })
    };
    returnParams = (  )=>{
        const params = {
            page :this.state.params.page
        };
        if( this.state.params.searchText!=='' ){
            params.searchText = this.state.params.searchText
        }

        if( this.state.params.supplierType!=='' ){
            params.supplierType = this.state.params.supplierType
        }
        return params
    };
    render() {
        const items = [
            {label: 'Users'},
            {label: 'Bride & Groom'},
        ];
        const PagesCount = Math.floor(this.props.bridegroom.count / 10) + 1;
        const data = this.props.bridegroom.data;
        const amount  = this.props.bridegroom.amount;
        return (
            <section className='users__bridge-section sub_section'>
                <Dialog className='confirm_popup custom_popup' header="Delete Location"
                        visible={ this.state.deleteBrideVisible } width="535px" height='auto' modal={true}
                        onHide={( e ) => this.setState({deleteBrideVisible: false})}>
                    <div className='label_text'>Are you sure you want to delete this user ?</div>
                    <button onClick={this.confirmRemoveBride}
                            className='add_location_button location_button'>Delete
                    </button>
                </Dialog>
                <BreadCrumbs>
                    {items}
                </BreadCrumbs>
                <div className="bride_container column_container flex-start">
                    <Label count={amount}/>
                    <div className='search'>
                        <img src={ searchIcon } className='search_icon'/>
                        <input value={ this.state.params.searchText } onChange={ async el => {
                            await  this.setState({
                                first: 0,
                                params:{
                                    ...this.state.params,
                                    searchText:el.target.value,
                                    page:1,

                                }
                            });
                            const params  = this.returnParams();
                            this.props.getBrideGroom( params );
                        }}  placeholder='Search'/>
                    </div>
                    <DataTable  className='custom_table' value={data}>
                        <Column field="name" header="User Name" sortable={true}/>
                        <Column field="registerDate" body={this.getDateRegisterSell} header="Register Date" sortable={true}/>
                        <Column field="email" header="Email" sortable={true}/>
                        <Column field="weddingDate" body={this.getDateWeedingSell} header="Weeding Date" sortable={true}/>
                        <Column field="weddingVenue" header="Weeding Venue" sortable={true}/>
                        <Column className='remove_column' body={this.removeSell}/>
                    </DataTable>
                    <div className='paginator-container'>
                        <Paginator className='custom_paginator' rows={ 10 } totalRecords={ this.props.bridegroom.count }
                                   first={ this.state.first }
                                   onPageChange={ async ( e ) => {
                                       await this.setState({
                                           first:e.first,
                                           goToPage:e.page + 1,
                                           params: {
                                               ...this.state.params,
                                               page: e.page + 1
                                           }
                                       });
                                       this.props.getBrideGroom( this.returnParams( this.state ) )
                                   }}/>
                        <div className='right-paginator'>
                            <div className='text'>Go to page</div>
                            <input onChange={async el => {

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
                                const params  = this.returnParams();
                                this.props.getBrideGroom( params )
                            }} value={ this.state.goToPage }/>
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
        bridegroom: state.bridegroom
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getBrideGroom:  ( params ) => {
            dispatch(actions.getBrideGroom( params ) )
        },
        initBrideGroom:( data )=>{
            dispatch(actions.initBrideGroom( data ) )
        },
        deleteUser: ( id, type ) => {
            dispatch(actions.deleteUser( id, type ) )
        }
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Bridge_groom );