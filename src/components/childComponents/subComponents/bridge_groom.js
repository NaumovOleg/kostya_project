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

class Bridge_groom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amauntBride: 0
        };
    }

    componentDidMount() {
       this.props.getBrideGroom();
    }

    componentWillUnmount() {
        this.props.initBrideGroom({
            data:[],
            amount:0
        })
    }

    handleRemove = (el, event) => {
        console.log(el)
    };
    removeSell = (rowData, column) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData)}>
                <img src={deleteIcon}/>
            </div>
        )
    };

    getDateRegisterSell=(rowData )=>{
        const date =  moment( rowData.registerDate  ).format('d.mm.Y');
        return <div>{  date } </div>
    };

    getDateWeedingSell=(rowData )=>{
        const date =  moment( rowData.weddingDate  ).format('d.mm.Y');
        return <div>{  date } </div>
    };
    render() {
        const items = [
            {label: 'Users'},
            {label: 'Bride & Groom'},
        ];

        const data = this.props.bridegroom.data;
        const amount  = this.props.bridegroom.amount;
        return (

            <section className='users__bridge-section sub_section'>
                <BreadCrumbs>
                    {items}
                </BreadCrumbs>
                <div className="bride_container column_container flex-start">
                    <Label count={amount}/>
                    <div className='search'>
                        <img src={searchIcon} className='search_icon'/>
                        <input placeholder='Search'></input>


                    </div>
                    <DataTable paginator={true}  rows={10}
                               rowsPerPageOptions={[5, 10, 20]} className='custom_table' value={data}>
                        <Column field="name" header="User Name" sortable={true}/>
                        <Column field="registerDate" body={this.getDateRegisterSell} header="Register Date" sortable={true}/>
                        <Column field="email" header="Email" sortable={true}/>
                        <Column field="weddingDate" body={this.getDateWeedingSell} header="Weeding Date" sortable={true}/>
                        <Column field="weddingVenue" header="Weeding Venue" sortable={true}/>
                        <Column className='remove_column' body={this.removeSell}/>
                    </DataTable>


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
        getBrideGroom:  () => {
            dispatch(actions.getBrideGroom())
        },
        getSuppliers:()=>{
            dispatch(actions.getSuppliers())
        },
        initBrideGroom:(data)=>{
            dispatch(actions.initBrideGroom(data ))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bridge_groom);