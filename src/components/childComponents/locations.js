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

class Locations extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addLocationvisible: false,
            editLocationVisible: false,
            editableLocation: ''
        };
    }

    componentWillMount() {

    }

    handleRemove = (el, event) => {
        console.log(el)

    };
    handleEdit = (el, event) => {
        console.log(el)
        this.setState({
            editLocationVisible: true,
            editableLocation: {...el}
        })
    }
    removeSell = (rowData, column) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData)}>
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

    confirmSaveEditedLocation=()=>{
        console.log( this.state );
        this.setState({
            editLocationVisible:false
        })
    };


    render() {
        const items = [
            {label: 'Locations'},
        ];

        const data = [
            {
                name: 'Peffru',
                latitude: '-74.97811',
                longtitude: '-4.9533022',

            },
            {
                name: 'Peru',
                latitude: '-74.97er811',
                longtitude: '-4.950fer22',

            },
            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95vervre022',

            },
            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95022',

            },
            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95022',

            },
            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95022',

            },

            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95022',

            },
            {
                name: 'Peru',
                latitude: '-74.97811',
                longtitude: '-4.95022',

            },
        ];


        return (
            <section className='location_section'>
                <Dialog className='add_new_location location_popup' header="Add New Location"
                        visible={this.state.addLocationvisible} width="535px" height='485px' modal={true}
                        onHide={(e) => this.setState({addLocationvisible: false})}>
                    <div className='label_text'>Fill in the data below</div>
                    <input placeholder='Location Name'/>
                    <input placeholder='Latitude'/>
                    <input placeholder='Longtitude'/>
                    <button className='add_location_button location_button'>Add</button>
                </Dialog>


                <Dialog className='edit_new_location location_popup' header="Edit Location"
                        visible={this.state.editLocationVisible} width="535px" height='485px' modal={true}
                        onHide={(e) => this.setState({editLocationVisible: false})}>
                    <div className='label_text'>Fill in the data below</div>
                    <input onChange={el => {
                        this.setState({
                            ...this.State,
                            editableLocation: {
                                ...this.state.editableLocation,
                                name: el.target.value
                            }
                        })
                    }} value={this.state.editableLocation.name} placeholder='Location Name'/>
                    <input onChange={el => {
                        this.setState({
                            ...this.State,
                            editableLocation: {
                                ...this.state.editableLocation,
                                latitude: el.target.value
                            }
                        })
                    }}  value={this.state.editableLocation.latitude} placeholder='Latitude'/>
                    <input onChange={el => {
                        this.setState({
                            ...this.State,
                            editableLocation: {
                                ...this.state.editableLocation,
                                longtitude: el.target.value
                            }
                        })
                    }} value={this.state.editableLocation.longtitude} placeholder='Longtitude'/>
                    <button onClick={this.confirmSaveEditedLocation} className='add_location_button location_button'>Save</button>
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
                    <DataTable className='custom_table' value={data}>
                        <Column field="name" header="Name" sortable={true}/>
                        <Column field="latitude" header="Latitude" sortable={true}/>
                        <Column field="longtitude" header="Longtitude" sortable={true}/>
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
        ...state
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);