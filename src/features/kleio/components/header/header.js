import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import BTLogo from './BTLogo';
import Drawer from '@material-ui/core/Drawer';
import HamburgerMenu from '../../views/HamburgerMenu';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(0.6),
    },
    title: {
        flexGrow: 1,
        color: 'white',
        fontSize: '17px',
        marginLeft: theme.spacing(2.1),
    },
    drawerPaper: {
        marginTop: "64px"
    }
  }));

const Header = ({ showHamburgerMenuButton }) => {
    const classes = useStyles();

    const [hamburgerState, setHamburgerState] = React.useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerState(!hamburgerState);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                { showHamburgerMenuButton ? 
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleHamburgerMenu()}>
                        {hamburgerState ? <MenuOpenIcon /> : <MenuIcon />}
                    </IconButton> : ""
                }
                <BTLogo />
                <Typography variant="h6" className={classes.title}>{process.env.REACT_APP_NAME}</Typography>
            </Toolbar>
            <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} anchor="left" open={hamburgerState} onClose={() => setHamburgerState(false)}>
                <HamburgerMenu toggle={() => toggleHamburgerMenu()}/>
            </Drawer>
        </AppBar>
    );
}

export default Header;