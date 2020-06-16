import React from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as action from '../Action';

import AddFrom from './AddForm';
const AddContact = (props) => {
    const { list, addNewContact, editContact } = props

    const contactGetById = (id) => {
        const tempData = list.filter(d => d.id === id);
        if (tempData.length) {
            return tempData[0];
        } else {
            return null;
        }
    }

    const handleChangePage = (url) => {
        props.history.push(url);
    }

    return (
        <div>
            <AddFrom
                id={parseInt(props.match.params.id)}
                contactGetById={contactGetById}
                handleChangePage={handleChangePage}
                addNewContact={addNewContact}
                editContact={editContact} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.contact.details,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        ...action
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact)
