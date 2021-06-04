import React from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import TimelineIcon from '@material-ui/icons/Timeline';
import PhoneIcon from '@material-ui/icons/Phone';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {  List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { useStyles } from './DrawerTheme';

function SidebarItems() {
    const classes = useStyles();
    const items1 = [
        {
            name : 'Dashboard',
            icon : <DashboardIcon className={classes.icon} />
        },
        {
            name : 'Balances',
            icon : <AccountBalanceWalletIcon className={classes.icon} />
        },
        {
            name : 'Customers',
            icon : <GroupIcon className={classes.icon} />
        },
        {
            name : 'Analytics',
            icon : <TimelineIcon className={classes.icon} />
        }
     
    ]
    const items2 = [
        {
            name : 'Settings',
            icon : <SettingsIcon className={classes.icon} />
        },
        {
            name : 'Team',
            icon : <StarOutlineIcon className={classes.icon}/>
        },
        {
            name : 'Contact',
            icon : <PhoneIcon className={classes.icon}/>
        },
        {
            name : 'Logout',
            icon : <ExitToAppIcon className={classes.icon}/>
        }
     
    ]
    return (
        <div>
              <ListItem className={classes.logo} >
                <img src='./img/klasha.png' alt='logo'/>
            </ListItem>
           
            <List>
            <ListItem >
                <h5>Main Pages</h5>
            </ListItem>
                {items1.map((item, index) => (
                <ListItem className={classes.listItem} selected={item.name === 'Dashboard' }   button key={index}>
                    <ListItemIcon >{item.icon}</ListItemIcon>
                    <ListItemText classes={{secondary:classes.listItemText}} secondary={item.name} />
                </ListItem>
                ))}
            </List>
            <ListItem >
                <h5>General</h5>
            </ListItem>
            <List>
                {items2.map((item, index) => (
                <ListItem className={classes.listItem}   button key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText classes={{secondary:classes.listItemText}}  secondary={item.name} />
                </ListItem>
                ))}
            </List>
    </div>
    )
}

export default SidebarItems
