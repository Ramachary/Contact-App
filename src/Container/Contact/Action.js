import * as types from './ActionTypes';

export const addNewContact = (data) => {
    const { name, email, phone, gender, companyName, address } = data;
    return (dispatch, getState) => {
        const { details } = getState().contact;
        const lastData = details[details.length - 1];
        const newData = [
            ...details,
            {
                'id': lastData.id + 1,
                'name': name || '',
                'email': email || '',
                'phone': phone || '',
                'gender': gender || '',
                'companyName': companyName || '',
                'address': address || '',
            }
        ]
        return dispatch({ type: types.CREATE_NEW_CONTACT, payload: newData });
    }
}

export const editContact = (data) => {
    const { id, name, email, phone, gender, companyName, address } = data;
    return (dispatch, getState) => {
        const { details } = getState().contact;
        const newData = details.filter(data => {
            if (data.id === id) {
                if (name) data.name = name;
                if (email) data.email = email;
                if (phone) data.phone = phone;
                if (gender) data.gender = gender;
                if (companyName) data.companyName = companyName;
                if (address) data.address = address;
            }
            return data;
        })
        return dispatch({ type: types.EDIT_CONTACT, payload: newData });
    }
}


export const deleteContact = (data) => {
    const { id } = data;
    return (dispatch, getState) => {
        const { details } = getState().contact;
        const newData = details.filter((data) => data.id !== id);
        return dispatch({ type: types.DELETE_CONTACT, payload: newData });
    }
}

export const deleteMultipleContact = (data) => {
    let { ids } = data;
    if (!ids) {
        ids = [];
    }
    return (dispatch, getState) => {
        const { details } = getState().contact;
        const newData = details.filter((data) => ids.indexOf(data.id) === -1);
        return dispatch({ type: types.DELETE_CONTACT, payload: newData });
    }
}
