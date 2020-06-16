import React from 'react'

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as action from './Action';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MyStyles from './contactStyle';

import List from './List';
import Details from './Details';

const useStyles = makeStyles((theme) => MyStyles(theme));

const Contact = (props) => {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const classes = useStyles();
    const { list, deleteMultipleContact } = props

    const handleSelectedItem = (data) => {
        const { id } = data;
        if (id) {
            const tempList = list.filter(d => d.id === id);
            setSelectedItem(tempList[0])
        }
    }

    const handleEditPage = (id) => {
        props.history.push(`contact/edit/${id}`);
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12}>
                    <Paper className={classes.paper}>Search Button and all</Paper>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    <List
                        list={list}
                        handleSelectedItem={handleSelectedItem}
                        handleEditPage={handleEditPage}
                        deleteMultipleContact={deleteMultipleContact} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="stretch">
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid item xs zeroMinWidth>
                            <Details
                                selectedItem={selectedItem} />
                        </Grid>
                    </Grid>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item xs>
                                <p>{'Chat Syatem'}</p>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
