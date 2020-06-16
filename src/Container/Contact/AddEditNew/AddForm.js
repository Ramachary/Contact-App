import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(8),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        myTextField: {
            width: '60%'
        },
        button: {
            margin: theme.spacing(1),
        },
    })
});

const AddForm = (props) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');
    const { id, contactGetById, handleChangePage, addNewContact, editContact } = props;

    useEffect(() => {
        if (id) {
            const tempData = contactGetById(id);
            setName(tempData.name);
            setPhone(tempData.phone);
            setGender(tempData.gender);
            setEmail(tempData.email);
            setCompanyName(tempData.companyName);
            setAddress(tempData.address);
        }
    }, [id, contactGetById]);

    const onChangeHandler = (field) => (event) => {
        switch (field) {
            case 'name':
                return setName(event.target.value);
            case 'phone':
                return setPhone(event.target.value);
            case 'gender':
                return setGender(event.target.value);
            case 'email':
                return setEmail(event.target.value);
            case 'companyName':
                return setCompanyName(event.target.value);
            case 'address':
                return setAddress(event.target.value);
            default:
                return;
        }
    }

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Typography variant="h6" gutterBottom>
                    {`Shipping address`}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            className={classes.myTextField}
                            id="name"
                            name="name"
                            value={name}
                            label="Full name"
                            fullWidth
                            autoComplete="given-name"
                            onChange={onChangeHandler('name')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            className={classes.myTextField}
                            id="gender"
                            name="gender"
                            value={gender}
                            label="Gender"
                            fullWidth
                            onChange={onChangeHandler('gender')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            className={classes.myTextField}
                            id="email"
                            name="email"
                            value={email}
                            label="Email"
                            fullWidth
                            autoComplete="given-email"
                            onChange={onChangeHandler('email')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            className={classes.myTextField}
                            id="phone"
                            name="phone"
                            value={phone}
                            label="Phone"
                            fullWidth
                            autoComplete="give-Phone"
                            onChange={onChangeHandler('phone')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            className={classes.myTextField}
                            id="company"
                            name="company"
                            value={companyName}
                            label="Company"
                            fullWidth
                            autoComplete="give-company"
                            onChange={onChangeHandler('companyName')}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            className={classes.myTextField}
                            id="Address"
                            name="Address"
                            value={address}
                            label="Address"
                            fullWidth
                            onChange={onChangeHandler('address')}
                        />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={4} >
                            <div style={{ width: '50%' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                    onClick={() => {
                                        if (id) {
                                            editContact({
                                                'id': id,
                                                'name': name,
                                                'email': email,
                                                'phone': phone,
                                                'gender': gender,
                                                'companyName': companyName,
                                                'address': address,
                                            })
                                        } else {
                                            addNewContact({
                                                'name': name,
                                                'email': email,
                                                'phone': phone,
                                                'gender': gender,
                                                'companyName': companyName,
                                                'address': address,
                                            })
                                        }
                                        handleChangePage('/contact');
                                    }}
                                >
                                    {`Save`}
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div style={{ width: '50%' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.button}
                                    startIcon={<CancelIcon />}
                                    onClick={() => handleChangePage('/contact')}
                                >
                                    {`Cancel`}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    )
}

export default AddForm