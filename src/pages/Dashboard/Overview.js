import React from 'react'
import { Grid, Typography, makeStyles,Paper   } from '@material-ui/core'
import TodayCard from '../../components/cards/todayCard/TodayCard'
import { data, data2,doughnut,storeStat } from './datas';
import MenuBtn from '../../components/menuBtn/MenuBtn';
import PageDesc from '../../components/pageDesc/PageDesc';
import TodayGraph from '../../components/cards/todayCard/TodayGraph';
import { Doughnut } from 'react-chartjs-2';
import StoreStats from '../../components/storeStats/StoreStats';
import OrderTable from '../../components/table/orderTable/OrderTable';
const useStyles = makeStyles((theme) => ({
   desc : {
       width : '97%',
       margin : '0 auto',
       display : 'flex',
       justifyContent: 'space-between',
       alignItems : 'center',
       [theme.breakpoints.down('sm')]: {
        alignItems : 'flex-start',
        flexDirection: 'column'
     },
    
   },
   pageDesc : {
       width : '100%',
       padding: '0px',
       marginBottom : '15px',
       [theme.breakpoints.down('sm')]: {
        width : '50%', 
     },
    
   },
   graph: {      
    width: '100%',   
},
   paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `50%`
    }
   
   },
   table: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `50%`
    }
   
   },
   salesStat : {
    display : 'flex',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems : 'center',
   
   },
   btn : {
       width : '30%',
       display : 'flex',
       justifyContent: 'space-between',
       alignItems : 'center',
       [theme.breakpoints.down('md')]: {
        width: '35%',
        
     },
       [theme.breakpoints.down('sm')]: {
        width: '50%',
        
        
     },
   },
  }));

function Overview() {
    const classes = useStyles();

    return (
        <div>
             <Grid container spacing={3}>
                <PageDesc title='Overview'/>
             
                  {
                    data.map((data,i) =>  <TodayCard data={data} key={i}/> )
                  }
               
               <Grid item  xs={12} >
                <Paper className={classes.paper}>
                  <div className={classes.salesStat}>
                    <Typography variant="h6"  gutterBottom>
                      Sales Statistics
                    </Typography>
                    <MenuBtn title='Weekly' items={['Daily','Weekly', 'Monthly']}/>
                  </div>
                  <div className={classes.graph}>
                   <TodayGraph data={data2}/>
                  </div>

                </Paper>
                </Grid>
               <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                    <Typography variant="h6"  gutterBottom>
                      Order Statistics
                    </Typography>
                   
                    <Doughnut data={doughnut} />
              

                </Paper>
                </Grid>
               <Grid item  xs={12} sm={6} >
                <Paper className={classes.paper}>
                    <Typography variant="h6"  gutterBottom>
                      Store Statistics
                    </Typography>
                    {
                      storeStat.map((stat,i) => <StoreStats key={i} data={stat}/>)
                    }
                </Paper>
                </Grid>
               <Grid item  xs={12}  >
                <Paper className={classes.table}>
                <Typography variant="h6"  gutterBottom>
                      Recent Orders
                    </Typography>
                    <OrderTable/>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Overview
