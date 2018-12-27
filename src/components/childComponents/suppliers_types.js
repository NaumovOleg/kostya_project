import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from "./helpers/breadCrumbs";
import plusIcon from "../../images/common/ic_add@3x.png";
import searchIcon from "../../images/users/ic_search@3x.png";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import deleteIcon from "../../images/users/ic_delete@3x.png";
import editIcon from "../../images/common/ic_edit@3x.png";
import { Dialog } from "primereact/dialog";
import * as actions from "../../store/actions";

class SuppliersTypes extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            editableType: {
                title: '',
                _id: ''
            },
            editTypeVisible: false,
            addNewTypeVisible: false,
            removeVisible: false,
            removableType: {
                _id: ''
            },
            newType: {
                title: ''
            }
        };
    }

    componentWillMount() {}

    handleRemove = ( el ) => {
        this.setState( {
            ...this.state,
            removeVisible: true,
            removableType: {
                _id: el._id
            },
        } )
    };
    handleEdit = ( el ) => {
        this.setState( {
            editTypeVisible: true,
            editableType: { title: el.title, _id: el._id }
        } )
    };
    removeSell = ( rowData ) => {
        return (
            <div className='remove_icon' onClick={ this.handleRemove.bind( null, rowData ) }>
                <img src={ deleteIcon }/>
            </div>
        )
    };
    editSell = ( rowData, column ) => {
        return (
            <div className='edit_icon' onClick={ this.handleEdit.bind( null, rowData ) }>
                <img src={ editIcon }/>
            </div>
        )
    };
    confirmSaveEditedType = () => {
        this.setState( {
            editTypeVisible: false
        } );
        this.props.editSuppliersTypes( this.state.editableType );
    };
    confirmAddNewType = () => {
        this.setState( {
            addNewTypeVisible: false
        } );
        this.props.addSuppliersTypes( this.state.newType )
    };
    confirmRemoveType = () => {
        this.setState( {
            removeVisible: false,
        } );
        this.props.removeSuppliersTypes( this.state.removableType );
    };

    render() {
        const items = [
            { label: 'Supplier Type' },
        ];
        const data = this.props.supplierTypes;
        return (
            <section className='suppliers_section'>
                <Dialog className='confirm_popup custom_popup' header="Delete Supplier Type"
                        visible={ this.state.removeVisible } width="535px" height='auto' modal={ true }
                        onHide={ ( e ) => this.setState( { removeVisible: false } ) }>
                    <div className='label_text'>Are you sure you want to delete this supplier type?</div>
                    <button onClick={ this.confirmRemoveType }
                            className='add_location_button location_button'>Delete
                    </button>
                </Dialog>
                <Dialog className='add_new_type type_popup add_popup custom_popup' header="Add New Type"
                        visible={ this.state.addNewTypeVisible } width="535px" height='485px' modal={ true }
                        onHide={ ( e ) => this.setState( { addNewTypeVisible: false } ) }>
                    <div className='label_text'>Fill in the data below</div>
                    <input value={ this.state.newType.title } onChange={ ( el ) => {
                        this.setState( {
                            newType: {
                                ...this.state.newType,
                                title: el.target.value
                            }
                        } )
                    } } placeholder='Type Name'/>
                    <button onClick={ this.confirmAddNewType } className='add_location_button location_button'>Add
                    </button>
                </Dialog>

                <Dialog className='edit_new_type type_popup custom_popup' header="Edit Supplier Type"
                        visible={ this.state.editTypeVisible } width="535px" height='485px' modal={ true }
                        onHide={ ( e ) => this.setState( { editTypeVisible: false } ) }>
                    <div className='label_text'>Fill in the data below</div>
                    <input value={ this.state.editableType.title } onChange={ el => {
                        this.setState( {
                            ...this.State,
                            editableType: {
                                ...this.state.editableType,
                                title: el.target.value
                            }
                        } )
                    } } placeholder='Location Name'/>

                    <button onClick={ this.confirmSaveEditedType } className='add_location_button location_button'>Save
                    </button>
                </Dialog>
                <BreadCrumbs>
                    { items }
                </BreadCrumbs>
                <div className='suppliers_type--container'>
                    <button onClick={ ( e ) => this.setState( { addNewTypeVisible: true } ) }
                            className='add_location_button open_popup_buttomn'>
                        <img className='plus_image' src={ plusIcon }></img>
                        <span className='text'>Add New Type</span>.
                    </button>

                    <div className='search'>
                        <img src={ searchIcon } className='search_icon'/>
                        <input placeholder='Search'></input>
                    </div>
                    <DataTable className='custom_table' value={ data }>
                        <Column field="title" header="Name" sortable={ true }/>
                        <Column className='edit_column' body={ this.editSell }/>
                        <Column className='remove_column' body={ this.removeSell }/>
                    </DataTable>
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        supplierTypes: state.supplierTypes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addSuppliersTypes: ( data ) => {
            dispatch( actions.addSuppliersTypes( data ) )
        },
        removeSuppliersTypes: ( data ) => {
            dispatch( actions.removeSuppliersTypes( data ) )
        },
        editSuppliersTypes: ( data ) => {
            dispatch( actions.editSuppliersTypes( data ) )
        }


    };
};

export default connect( mapStateToProps, mapDispatchToProps )( SuppliersTypes );