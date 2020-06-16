import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

import AppHeaderMenuStyle from './AppHeaderMenuStyle';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => (AppHeaderMenuStyle(theme, drawerWidth)));

const AppHeaderMenu = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>{`Doodleblue Assignment`}</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {/* {['Home', 'Doodleblue Assignment'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}

          {/* Home */}
          <ListItem button key={Math.random()}>
            <Link to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
            </Link>
            <ListItemText primary={'Home'} />
          </ListItem>

          {/* Doodleblue Assignment */}
          <ListItem button key={Math.random()}>
            <Link to="/contact">
              <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
            </Link>
            <ListItemText primary={'Contact'} />
          </ListItem>
          
          {/* Doodleblue Assignment */}
          <ListItem button key={Math.random()}>
            <Link to="/About">
              <ListItemIcon><InfoIcon /></ListItemIcon>
            </Link>
            <ListItemText primary={'About'} />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

export default AppHeaderMenu;