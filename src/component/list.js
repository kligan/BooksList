import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// Material.UI styles
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        textAlign: 'center',
        backgroundColor: '#ffffff',
    },
    divPosition:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '3px'
    }
}));

// component to render books lists by their title name
const ListItemBooks = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.divPosition}>
            <List component="div" className={classes.root} aria-label="mailbox folders">
                <ListItem alignItems="center" button>
                    <ListItemText primary={props.name} />
                </ListItem>
            </List>
        </div>
    );
};

export default ListItemBooks;