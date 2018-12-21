import React, {Component} from 'react';
import {connect} from 'react-redux';
import BreadCrumbs from '../helpers/breadCrumbs';
import Label from '../helpers/label'
import searchIcon from '../../../images/users/ic_search@3x.png';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import deleteIcon from '../../../images/users/ic_delete@3x.png'

class Suppliers extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {

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

    render() {

        const data = [
            {
                userName: 'Kathleenff Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleeeeen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathffffleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            },
            {
                userName: 'Kathleen Clark (Kathy)',
                registerDate: '26.10.2018',
                type: 'Band',
                email: 'kathy92@gmail.com',
                phone: '0934532332',
                webSite: 'kathy.com'
            }
        ];

        const items = [
            {label: 'Users'},
            {label: 'Suppliers'},
        ];

        return (
            <section className='users__suppliers_section sub_section'>
                <BreadCrumbs>
                    {items}
                </BreadCrumbs>
                <div className="suppliers_container column_container flex-start">
                    <Label count={6405}/>
                    <div className='search'>
                        <img src={searchIcon} className='search_icon'/>
                        <input placeholder='Search'></input>

                        <DataTable className='custom_table' value={data}>
                            <Column field="userName" header="User Name" sortable={true}/>
                            <Column field="registerDate" header="Register Date" sortable={true}/>
                            <Column field="type" header="Type" sortable={true}/>
                            <Column field="email" header="Email" sortable={true}/>
                            <Column field="phone" header="Phone" sortable={true}/>
                            <Column field="webSite" header="Web Site" sortable={true}/>
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);