import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( theme => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    [theme.breakpoints.down("sm")]: {
     
      maxWidth: `100%`
    }
  },
  paid : {
      color : 'green',
      display : 'flex',
      width : '100px',
      justifyContent : 'space-evenly',
      alignItems : 'center'
     
  },
  due : {
      color : 'rgb(244,189,14)',
      display : 'flex',
      width : '100px',
      justifyContent : 'space-evenly',
      alignItems : 'center'
  },
  canceled : {
      color : 'red',
      display : 'flex',
      width : '100px',
      justifyContent : 'space-evenly',
      alignItems : 'center'
  },
  acronym : {
      width : '60px',
      borderRadius : '50%',
      padding : '6px',
      background : 'rgb(239,236,255)',
      color : 'rgb(161,154,255)',
      marginRight : '5px',
      fontWeight : 'bold'
  }
}));



const rows = [
 {
     orderNo : '#54231',
     customer : 'Abu Bin Ishtiyak',
     date : '02/11/2020',
     amount : '4,596.75',
     status : 'paid'
 },
 {
     orderNo : '#54336',
     customer : 'Desiree Edwards',
     date : '02/11/2020',
     amount : '1,596.75',
     status : 'paid'
 },
 {
     orderNo : '#54996',
     customer : 'Blanca Schultz',
     date : '02/11/2020',
     amount : '2,596.75',
     status : 'canceled'
 },
 {
     orderNo : '#34996',
     customer : 'Naomi Lawrence',
     date : '02/11/2020',
     amount : '3,596.75',
     status : 'due'
 },
];
const acronym = name => name.match(/\b(\w)/g).join('');

function OrderTable() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const classname = (status) => {
    if(status === 'paid'){
        return classes.paid
    }else if (status === 'due'){
        return classes.due
    }else{
        return classes.canceled
    }
  }

  return (
    
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order No.</TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.orderNo}
              </TableCell>
              <TableCell align="center"><span className={classes.acronym}>{acronym(row.customer)}</span>{row.customer}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.amount} USD</TableCell>
              <TableCell align="center" className={classname(row.status)}><span style={{fontWeight: 'bolder', fontSize:'50px'}}>&#183;</span>{row.status} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
   
  );
}
export default OrderTable