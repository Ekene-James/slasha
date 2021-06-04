import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        overflowX : 'hidden'
      },
      
     },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      boxShadow : 'none'
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    date : {
      fontSize : '10px',
      color: 'gray'
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor : 'rgb(234,234,234)'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      
    },
    listItem : {
      fontSize: '10px',
     '&:hover' : {
      background: 'white'
     },  
    },
  
    listItemText : {
      fontSize: '11px'
    },
    icon: {
      fontSize: '15px'
    },
    iconBtn :{
     border : '1px solid #ffd8d5',
     width : '38px',
     height : '38px',
     background: 'transparent',
     marginLeft : '5px',
     alignSelf: 'center'

    },
    ntnBtn : {
      width : '38px',
     height : '38px',
     background: '#e8e8e8',
     marginRight : '7px',
     alignSelf: 'center'
    },
    logo:{
      marginTop : '15px'
    },
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
   
   

  }));