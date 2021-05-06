import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#d7aa71',
    }
}));

const Title = (props) =>{
    const classes = useStyles();
    return (
        <div>
            <Box component="span" m={1} className={classes.root}>
                <h1 data-testid="title" >{props.title}</h1>
                <Typography variant="h4" component="h1" gutterBottom>
                   Books with Title.
                </Typography>
            </Box>
        </div>
    );
}

export default Title;