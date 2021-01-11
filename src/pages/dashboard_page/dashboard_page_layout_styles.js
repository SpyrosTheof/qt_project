import { makeStyles } from '@material-ui/core/styles';

//Styles

const bordersSetup = '2px solid #DADADA';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  drawer: {
    color: 'red',
    backgroundColor: '#fff',

    [theme.breakpoints.up('lg')]: {
      flexShrink: 0,
      zIndex: 100,
      height: '100vh',
    },
  },
  appBar: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    color: '#000',
    zIndex: theme.zIndex.drawer + 1,
    height: '10%',
    boxShadow: 'none',
    borderBottom: bordersSetup,

    [theme.breakpoints.up('sm')]: {
      width: '59.90%',
    },
    [theme.breakpoints.up('md')]: {
      width: '69.90%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '85%',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: {
    height: 150,
    display: 'flex',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: '50%',
    borderRight: bordersSetup,

    [theme.breakpoints.up('sm')]: {
      width: '40%',
      borderRight: bordersSetup,
    },
    [theme.breakpoints.up('md')]: {
      width: '30%',
      borderRight: bordersSetup,
    },
    [theme.breakpoints.up('lg')]: {
      width: '15%',
      borderRight: bordersSetup,
    },
  },
  content: {
    alignSelf: 'flex-end',
    marginLeft: 'auto',
    justifySelf: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '89.95%',
    width: '100%',
    backgroundColor: 'white',

    [theme.breakpoints.up('sm')]: {
      width: '59.90%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('md')]: {
      width: '69.90%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      width: '84.95%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexDirection: 'row',
      paddingTop: 100,
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },

  listItemTextTitles: {
    fontWeight: 500,
    fontfamily: 'SF Pro Display',
    fontSize: '10px',
    color: 'rgba(0,0,0,0.58)',
  },
  listItemText: {
    fontSize: '14px',
    fontfamily: 'SF Pro Display',
    color: '#C4C4C4',
    '&:hover': {
      color: 'white',
    },
  },

  categoryToolTip: {
    '&:hover': {
      backgroundColor: '#072C5E',
      color: 'white',
      cursor: 'pointer',
    },
  },

  search: {
    color: '#A9A9A9',
    width: 500,
    height: 36,
    background: '#FFFFFF',
    border: '1px solid #B6B6B6',
    boxSizing: 'border-box',
    borderRadius: 8,
    display: 'none',
    paddingLeft: 50,

    [theme.breakpoints.up('md')]: {
      display: 'inline-box',
    },
  },
  searchWithIcon: {
    position: 'relative',
  },

  searchImg: {
    position: 'absolute',
    top: 5,
    left: 8,
    display: 'none',

    [theme.breakpoints.up('md')]: {
      display: 'inline-box',
    },
  },
}));

export default useStyles;
