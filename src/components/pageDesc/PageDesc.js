import React from 'react'
import {  Typography,Button, makeStyles   } from '@material-ui/core'
import ReceiptIcon from '@material-ui/icons/Receipt';
import MenuBtn from '../menuBtn/MenuBtn';

const useStyles = makeStyles((theme) => ({
    desc : {
        width : '97%',
        margin : 'auto',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
       
        [theme.breakpoints.down('sm')]: {
         alignItems : 'flex-start',
         flexDirection: 'column',
       
      },
     
    },


    btn : {
        width : '30%',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems : 'center',
        [theme.breakpoints.down('md')]: {
         width: '40%',
         
      },
        [theme.breakpoints.down('sm')]: {
         width: '50%', 
         flexDirection: 'column',
         alignItems : 'start',
      },
    },
    reports : {
        
        [theme.breakpoints.down('sm')]: {
          margin : '10px 0',
        
      },
    },
   }));

function PageDesc(props) {
    const classes = useStyles();
    return (
        <div className={classes.desc}>
        <Typography variant="h5"  gutterBottom>
          {props.title}
        </Typography>
        {
          !props.notShow ? (
            <div className={classes.btn}>
            <MenuBtn title='Last 30 Days' items={['Last 30 days','Last 6 months', 'Last 1 year']}/>
            <Button
               variant="contained"
               color="default"
               aria-controls="simple-menu" aria-haspopup="true"
               startIcon={<ReceiptIcon />}
               className={classes.reports}
               >
                   Reports
               </Button>
           </div>

          ) : ''
        }
       
     </div>
    )
}

export default PageDesc
