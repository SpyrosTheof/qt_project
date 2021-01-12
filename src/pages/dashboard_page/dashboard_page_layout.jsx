import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import TableIcon from '../../assets/table.svg';
import LogoIcon from '../../assets/logo.svg';
import HomeIcon from '../../assets/Home.svg';
import Warehouse1 from '../../assets/Warehouse1.svg';
import Warehouse2 from '../../assets/Warehouse2.svg';
import Warehouse3 from '../../assets/Warehouse3.svg';
import Warehouse4 from '../../assets/Warehouse4.svg';
import EntryIcon from '../../assets/Entry.svg';
import SearchIcon from '../../assets/Search.svg';
import SubMenusLayout from '../../components/UI_navigation/sub_menus_layout';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './dashboard_page_layout_styles';

//drawer

function DashboardPageLayout() {
  const urlLocation = useLocation();

  const mainHeading =
    urlLocation.pathname == '/'
      ? 'Κεντρική Σελίδα'
      : urlLocation.pathname == '/entry'
      ? 'Καταχώρηση'
      : urlLocation.pathname == '/warehouse1'
      ? 'Αποθήκη1'
      : urlLocation.pathname == '/warehouse2'
      ? 'Αποθήκη2'
      : urlLocation.pathname == '/warehouse3'
      ? 'Αποθήκη3'
      : 'Αποθήκη4';

  const dummyMenuCategories = [
    {
      listTitle: 'Κεντρική Σελίδα',
      src: HomeIcon,
      path: '/',
    },
    {
      listTitle: 'Αποθήκη 1',
      src: Warehouse1,
      path: '/warehouse1',
    },
    {
      listTitle: 'Αποθήκη 2',
      src: Warehouse2,
      path: '/warehouse2',
    },
    {
      listTitle: 'Αποθήκη 3',
      src: Warehouse3,
      path: '/warehouse3',
    },
    {
      listTitle: 'Αποθήκη 4',
      src: Warehouse4,
      path: '/warehouse4',
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  //Παρακάτω υπάρχουν κάποια inline styles τα οποία μπήκαν λόγω βιασύνης αλλά και λόγω μεγέθους του project - ελέγξιμα -->χρειάζεται refactoring
  const drawer = (
    <div>
      <List>
        <ListItem>
          <Tooltip title='Menu Επιλογών'>
            <ListItemIcon style={{ minWidth: 22 }}>
              <img
                style={{ width: 15 }}
                className={classes.intro_image}
                src={TableIcon}
                alt='intro_image'
              />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            classes={{ primary: classes.listItemTextTitles }}
            style={{ fontSize: 10 }}
            primary='MENOY ΕΠΙΛΟΓΩΝ'
          />
        </ListItem>
        {dummyMenuCategories.map((category, index) => (
          <Link to={category.path} style={{ textDecoration: 'none' }}>
            <ListItem
              className={classes.categoryToolTip}
              style={{
                margin: 'auto',
                width: '85%',
              }}
              key={index}
            >
              <Tooltip title={category.listTitle}>
                <ListItemIcon style={{ minWidth: 35 }}>
                  <img
                    style={{ width: 24, backgroundColor: 'C4C4C4' }}
                    className={classes.intro_image}
                    src={category.src}
                    alt='intro_image'
                  />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary={category.listTitle}
              />
            </ListItem>
          </Link>
        ))}

        <ListItem style={{ marginTop: 30 }}>
          <Tooltip title='Καταχώρηση Υλικού'>
            <ListItemIcon style={{ minWidth: 22 }}>
              <img
                style={{ width: 15 }}
                className={classes.intro_image}
                src={TableIcon}
                alt='intro_image'
              />
            </ListItemIcon>
          </Tooltip>
          <ListItemText
            classes={{ primary: classes.listItemTextTitles }}
            style={{ fontSize: 10 }}
            primary='ΚΑΤΑΧΩΡΗΣΗ ΥΛΙΚΟΥ ΚΑΙ ΚΩΔΙΚΩΝ'
          />
        </ListItem>
        <Link to='/entry' style={{ textDecoration: 'none' }}>
          <ListItem
            className={classes.categoryToolTip}
            style={{
              margin: 'auto',
              width: '85%',
            }}
          >
            <Tooltip title='Καταχώρηση'>
              <ListItemIcon style={{ minWidth: 35 }}>
                <img
                  style={{ width: 24, backgroundColor: 'C4C4C4' }}
                  className={classes.intro_image}
                  src={EntryIcon}
                  alt='intro_image'
                />
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={'Καταχώρηση'}
            />
          </ListItem>
        </Link>

        <div
          style={{
            marginTop: 100,
            borderTop: '2px solid #DADADA',
            height: '100%',
          }}
        >
          <ListItem style={{ marginTop: 20 }}>
            <Tooltip title='Ρυθμίσεις'>
              <ListItemIcon style={{ minWidth: 22 }}>
                <img
                  style={{ width: 15 }}
                  className={classes.intro_image}
                  src={TableIcon}
                  alt='intro_image'
                />
              </ListItemIcon>
            </Tooltip>
            <ListItemText
              classes={{ primary: classes.listItemTextTitles }}
              style={{ fontSize: 10 }}
              primary='ΡΥΘΜΙΣΕΙΣ'
            />
          </ListItem>
        </div>
      </List>
    </div>
  );

  //Render
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              variant='h6'
              noWrap
              style={{
                fontSize: 21,
                color: '#b282121',
                fontWeight: '500',
              }}
            >
              {mainHeading}
            </Typography>
          </div>
          <div className={classes.searchWithIcon}>
            <input
              className={classes.search}
              placeholder="Αναζήτηση Υλικού ,'Ελεγχος Αποθεμάτων"
              type='text'
            />
            <img src={SearchIcon} className={classes.searchImg} alt='search' />
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  marginTop: '30px',
                  marginLeft: '25px',
                  width: '90%',
                }}
              >
                <img
                  style={{ height: 50, width: 40, marginRight: 20 }}
                  className={classes.intro_image}
                  src={LogoIcon}
                  alt='intro_image'
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontWeight: 'bold',
                  }}
                >
                  <span>Warehouse</span>
                  <span>management</span>
                </div>
              </div>
            </div>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>
        <SubMenusLayout />
      </div>
    </div>
  );
}

DashboardPageLayout.propTypes = {
  container: PropTypes.object,
};
export default DashboardPageLayout;
