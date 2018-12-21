import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreadCrumbs from '../helpers/breadCrumbs';
import Label from '../helpers/label'
import searchIcon from "../../../images/users/ic_search@3x.png";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import deleteIcon from "../../../images/users/ic_delete@3x.png";
class Bridge_groom extends Component {

    constructor ( props ) {
        super ( props );
        this.state = {};
    }

    componentWillMount () {

    }

    handleRemove = (el, event) => {
        console.log(el)

    }
    removeSell = (rowData, column) => {
        return (
            <div className='remove_icon' onClick={this.handleRemove.bind(null, rowData)}>
                <img src={deleteIcon}/>
            </div>
        )

    }



    render () {
        const items = [
            {label:'Users'},
            {label:'Bride & Groom'},
        ];

        const data = [
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                weeding: '26.10.2018',
                email: 'kathy92@gmail.com',
                venue:'Midair'

            },

        ];

        return (

            <section className='users__bridge-section sub_section'>
                <BreadCrumbs  >
                    {items}
                </BreadCrumbs>
                <div className="bride_container column_container flex-start">
                    <Label count={6405}/>
                    <div className='search'>
                        <img src={searchIcon} className='search_icon'/>
                        <input placeholder='Search'></input>

                        <DataTable className='custom_table' value={data}>
                            <Column field="userName" header="User Name" sortable={true}/>
                            <Column field="registerDate" header="Register Date" sortable={true}/>
                            <Column field="email" header="Email" sortable={true}/>
                            <Column field="weeding" header="Weeding Date" sortable={true}/>
                            <Column field="venue" header="Weeding Venue" sortable={true}/>
                            <Column className='remove_column' body={this.removeSell}/>
                        </DataTable>
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

    };
};

export default connect ( mapStateToProps, mapDispatchToProps ) ( Bridge_groom ) ;