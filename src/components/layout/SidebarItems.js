import React, { useState,useContext, useEffect } from 'react'
import {Link,useHistory} from 'react-router-dom'
import { AuthContext } from '../../store/auth/AuthStore';
import { logout,getRoute } from '../../store/actions/AuthActions';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';

import TimelineIcon from '@material-ui/icons/Timeline';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {  List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import NestedList from '../nestedList/NestedList';
import StarBorder from '@material-ui/icons/StarBorder';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';


export const useStyles = makeStyles((theme) => ({
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

    logo:{
      margin : '0',
      
    },
    img:{
      marginTop : '15px',
      width: '30px',
      height : '20px',
    },
    link: {
        textDecoration : 'none'
    }
   
  }));
function SidebarItems({clicked}) {
    const history = useHistory()
    
    const {state,dispatch} = useContext(AuthContext);
    const classes = useStyles();
    const [select, setselect] = useState('Dashboard');
    useEffect(() => dispatch(getRoute(history.location.pathname)), [select]);

    const items1 = [
        {
            name : 'Dashboard',
            icon : <DashboardIcon className={classes.icon} />,
            link : '/overview',
            
        },
        {
            name : 'Products',
            icon : <GroupIcon className={classes.icon} />,
            link : '/products',
            
        },
        {
            name : 'Balances',
            icon : <AccountBalanceWalletIcon className={classes.icon} />,
            link : '/balances'
        },
        {
            name : 'Analytics',
            icon : <TimelineIcon className={classes.icon} />,
            link : '/analytics'
        }
     
    ]
    const items2 = [
        {
            name : 'Settings',
            icon : <SettingsIcon className={classes.icon} />,
            link : '/settings'
        },
        {
            name : 'Support',
            icon : <ContactSupportIcon className={classes.icon}/>,
            link : '/support'
        },
        {
            name : 'Contact',
            icon : <PhoneIcon className={classes.icon}/>,
            link : '/contact',
            collapse : [{name : 'Action1', icon :  <StarBorder />},{name : 'Action2', icon :  <StarBorder />},]
        },
    ]
    const handleSelected = (name) => {
        setselect(name);
        if(clicked)clicked();
       
       
    }
    return (
        <div>
              <ListItem className={classes.logo} >
                <img src='./img/logo.png'  alt='logo'/>
            </ListItem>
           
            <List>
            <ListItem >
                <h5>Main Pages</h5>
            </ListItem>
                {items1.map((item, index) => item.collapse ? (
                            <NestedList
                                key={index}
                                name={item.name}
                                handleSelected={handleSelected}
                                select={select}
                                icon={item.icon}
                                collapseItems={item.collapse}
                            
                            />
                        ) : (
                    <Link className={classes.link}  key={index} to={item.link}>
                        <ListItem 
                        selected={item.name === select}
                        onClick={() => handleSelected(item.name)} 
                        className={classes.listItem} 
                        button 
                        >
                            <ListItemIcon >{item.icon}</ListItemIcon>
                            <ListItemText classes={{secondary:classes.listItemText}} secondary={item.name} />
                        </ListItem>
                    </Link>
                        )
                    
                 
             
                )}
            </List>
            <ListItem >
                <h5>General</h5>
            </ListItem>
            <List>
            {items2.map((item, index) => item.collapse ? (
                    <NestedList
                        key={index}
                        name={item.name}
                        handleSelected={handleSelected}
                        select={select}
                        icon={item.icon}
                        collapseItems={item.collapse}
                    
                    />
                        ) : (
                    <Link className={classes.link}  key={index} to={item.link}>
                        <ListItem 
                        selected={item.name === select}
                        onClick={() => handleSelected(item.name)} 
                        className={classes.listItem} 
                        button 
                        >
                            <ListItemIcon >{item.icon}</ListItemIcon>
                            <ListItemText classes={{secondary:classes.listItemText}} secondary={item.name} />
                        </ListItem>
                    </Link>
                        )
                )}
                  <ListItem 
                        onClick={() => dispatch(logout())} 
                        className={classes.listItem} 
                        button 
                        >
                            <ListItemIcon ><ExitToAppIcon className={classes.icon}/></ListItemIcon>
                            <ListItemText classes={{secondary:classes.listItemText}} secondary='Logout' />
                        </ListItem>
            </List>
    </div>
    )
}

export default SidebarItems
