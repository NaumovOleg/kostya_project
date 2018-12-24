import React, {Component} from 'react';
import {connect} from 'react-redux';
import BreadCrumbs from "./helpers/breadCrumbs";
import plusIcon from '../../images/common/ic_add@3x.png'
import searchIcon from "../../images/users/ic_search@3x.png";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import deleteIcon from "../../images/users/ic_delete@3x.png";
import editIcon from '../../images/common/ic_edit@3x.png'
import {Dialog} from 'primereact/dialog';
import * as actions from "../../store/actions";

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addLocationvisible: false,
            editLocationVisible: false,
            deleteLocationVisible: false,
            removeLocationId: '',
            editableLocation: {
                title: "",
                _id:'',
                location: {
                    "lat": "",
                    "lng": ""
                },
            },
            newLocation: {
                title: "",
                location: {
                    "lat": "",
                    "lng": ""
                },

            }
        };
    }

    componentWillUnmount() {
        this.props.initLocations([])
    }

    componentWillMount() {

        this.props.initLocations();

    }

    handleRemove = (el, event) => {
        this.setState({
            ...this.state,
            deleteLocationVisible: true,
            removeLocationId: el
        })

    };
    handleEdit = async (el, event) => {
       await this.setState({
            editLocationVisible: true,
           editableLocation:{...el}
        });
    };
    removeSell = (rowData, column) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData._id)}>
                <img src={deleteIcon}/>
            </div>
        )
    };
    editSell = (rowData, column) => {
        return (
            <div className='edit_icon' onClick={this.handleEdit.bind(null, rowData)}>
                <img src={editIcon}/>
            </div>
        )
    };
    confirmSaveEditedLocation = () => {

        this.setState({
            editLocationVisible: false
        });
        const data = this.state.editableLocation;
        this.props.editLocation( data )

    };
    confirmRemoveLocation = () => {

        this.setState({
            deleteLocationVisible: false,
        });

        this.props.romoveLocation({
            _id:this.state.removeLocationId
        });
    };
    confirmAddNew = ()=>{
        this.setState({
            addLocationvisible:false
        });
        this.props.addNewLocations(this.state.newLocation)
    };

    getlatitudeSell = (rowData) => {
        return <div>{rowData.location.lat}</div>
    };
    getlongitudeSell = (rowData) => {
        return <div>{rowData.location.lng}</div>
    };

    render() {
        const items = [
            {label: 'Locations'},
        ];
        const data = this.props.locations;
        return (
            <section className='location_section'>
                <Dialog className='confirm_popup custom_popup' header="Delete Location"
                        visible={this.state.deleteLocationVisible} width="535px" height='485px' modal={true}
                        onHide={(e) => this.setState({deleteLocationVisible: false})}>
                    <div className='label_text'>Are you sure you want to delete this location?</div>
                    <button onClick={this.confirmRemoveLocation}
                            className='add_location_button location_button'>Delete
                    </button>
                </Dialog>
                <Dialog className='add_new_location location_popup add_popup custom_popup' header="Add New Location"
                        visible={this.state.addLocationvisible} width="535px" height='485px' modal={true}
                        onHide={(e) => this.setState({addLocationvisible: false})}>
                    <div className='label_text'>Fill in the data below</div>
                    <input value={this.state.newLocation.title} onChange={(el) => {

                        this.setState({
                            newLocation: {
                                ...this.state.newLocation,
                                title: el.target.value
                            }
                        })

                    }} placeholder='Location Name'/>
                    <input onChange={(el) => {

                        this.setState({
                            newLocation: {
                                ...this.state.newLocation,
                                location: {
                                    ...this.state.newLocation.location,
                                    lat: el.target.value
                                }
                            }
                        })

                    }} value={this.state.newLocation.location.lat} placeholder='Latitude'/>
                    <input onChange={(el) => {

                        this.setState({
                            newLocation: {
                                ...this.state.newLocation,
                                location: {
                                    ...this.state.newLocation.location,
                                    lng: el.target.value
                                }
                            }
                        })

                    }} value={this.state.newLocation.location.lng} placeholder='Longtitude'/>
                    <button onClick={this.confirmAddNew}
                            className='add_location_button location_button'>Add
                    </button>
                </Dialog>
                <Dialog className='edit_new_location location_popup custom_popup' header="Edit Location"
                        visible={this.state.editLocationVisible} width="535px" height='485px' modal={true}
                        onHide={(e) => this.setState({editLocationVisible: false})}>
                    <div className='label_text'>Fill in the data below</div>
                    <input onChange={el => {
                        this.setState({
                            ...this.state,
                            editableLocation: {
                                ...this.state.editableLocation,
                                title: el.target.value
                            }
                        })
                    }} value={this.state.editableLocation.title} placeholder='Location Name'/>
                    <input onChange={el => {
                        this.setState({
                            ...this.state,
                            editableLocation: {
                                ...this.state.editableLocation,
                                location:{
                                    ...this.state.editableLocation.location,
                                    lat: el.target.value
                                }

                            }
                        })
                    }} value={this.state.editableLocation.location.lat} placeholder='Latitude'/>
                    <input onChange={el => {
                        this.setState({
                            ...this.state,
                            editableLocation: {
                                ...this.state.editableLocation,
                                location:{
                                    ...this.state.editableLocation.location,
                                    lng: el.target.value
                                }
                            }
                        })
                    }} value={this.state.editableLocation.location.lng} placeholder='Longtitude'/>
                    <button onClick={
                       this.confirmSaveEditedLocation
                    }
                            className='add_location_button location_button'>Saves
                    </button>
                </Dialog>
                <BreadCrumbs>
                    {items}
                </BreadCrumbs>
                <div className='location_container'>
                    <button onClick={(e) => this.setState({addLocationvisible: true})}
                            className='add_location_button open_popup_buttomn'>
                        <img className='plus_image' src={plusIcon}></img>
                        <span className='text'>Add New Location</span>.
                    </button>

                    <div className='search'>
                        <img src={searchIcon} className='search_icon'/>
                        <input placeholder='Search'></input>
                    </div>
                    <DataTable  className='custom_table' value={data}>
                        <Column field="title" header="Name" sortable={true}/>
                        <Column field="latitude" body={this.getlatitudeSell} header="Latitude" sortable={true}/>
                        <Column field="longtitude" body={this.getlongitudeSell} header="Longtitude" sortable={true}/>
                        <Column className='edit_column' body={this.editSell}/>
                        <Column className='remove_column' body={this.removeSell}/>
                    </DataTable>


                </div>

            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        locations: state.locations
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initLocations: () => {
            dispatch(actions.getLocations())
        },
        addNewLocations: (data) => {
            dispatch(actions.addNewLocations(data))
        },
        editLocation:(data)=>{
            dispatch(actions.editLocation(data))
        },
        romoveLocation:(data)=>{
            dispatch(actions.romoveLocation(data))
        }


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);