import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { Avatar } from '@material-ui/core';

import colorList from '../../../util/colorList';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const getAvatarName = (name) => {
    const [fName, lName] = name.split(" ");
    if (lName) {
        return fName.split("", 1) + lName.split("", 1);
    } else {
        return fName.split("", 1);
    }
}

const ContactDetails = (props) => {
    const classes = useStyles();
    const { selectedItem } = props
    if (selectedItem) {
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{textAlign: '-webkit-center'}}>
                            <Avatar style={{ background: colorList[Math.floor(Math.random() * colorList.length - 1) + 1], width: '80px', height: '80px' }}>
                                <Typography>{getAvatarName(selectedItem.name)}</Typography>
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} style={{textAlign: '-webkit-center'}}>
                            <Typography>{selectedItem.name}</Typography>
                            <Typography>{selectedItem.companyName}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>{'Full Name'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{selectedItem.name}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>{'Email'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{selectedItem.email}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>{'Phone'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{selectedItem.phone}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>{'Company'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{selectedItem.companyName}</Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Typography>{'Address'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>{selectedItem.address}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    } else {
        return null;
    }
}

export default ContactDetails;