import { createTheme } from "@mui/material";

const theme = createTheme();

export const styles = {
    appBar: {
        position: 'relative',
    },
    toolbar: theme.mixins.toolbar,
    layout: {
        marginTop: '5%',
        width: 'auto',
        marginLeft: '30%',
        marginRight: '30%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 60,
        },
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    divider: {
        margin: '20px 0',
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}