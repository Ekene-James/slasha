import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { AppBar, Avatar, Badge, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { useStyles } from './DrawerTheme';

function TopBar({handleDrawerToggle}) {
    const classes = useStyles();
  
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id='mobileMenuId'
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
         
          <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge  variant="dot" color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem>
            <IconButton
             className={classes.iconBtn} 
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar className={classes.small} alt="Remy Sharp" src="./img/avatar.jpg" />
            </IconButton>
            <p style={{marginLeft : '5px'}}>Profile</p>
          </MenuItem>
        </Menu>
      );

    return (
        <div>
        <AppBar position='absolute' color='transparent' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div>
          <Typography style={{fontWeight : 'bold'}} variant="subtitle1" noWrap>
            Balances
          </Typography>
          <small className={classes.date}>
            Today, 20th october 2020
          </small>
         

          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
   
            <IconButton  className={classes.ntnBtn}  aria-label="show 17 new notifications" color="inherit">
              <Badge  variant="dot"  color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
            className={classes.iconBtn} 
              edge="end"
              aria-label="account of current user"
              aria-controls="account of current user"
              aria-haspopup="true"
              
              color="inherit"
            >
               <Avatar className={classes.small} alt="Remy Sharp" src="./img/avatar.jpg" />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
    )
}

export default TopBar
