import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { makeStyles,Paper , Button,TextField,  } from '@material-ui/core';
import { AuthContext } from '../../store/auth/AuthStore';
import { login } from '../../store/actions/AuthActions';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        width : '350px',
        height : '400px',
        margin : ' 100px auto',
        display : 'flex',
         justifyContent: 'space-between',
         alignItems: 'center',
         flexDirection : 'column',
      
        [theme.breakpoints.down("sm")]: {
            margin : ' 150px auto',
            width: `80%`
        }
       
       },
    form: {
        margin : '15px 0',
       
       },
       txtField: {
        marginTop : '25px',
       
       },
    link: {
        marginBottom : '30px',
       
       },
       bg: {
        height : '100vh',
        background: `url("./img/loginBg.jpg") no-repeat center center/cover`,
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
         
    },
   }));
function Login() {
    const classes = useStyles();
    const authCtx = useContext(AuthContext);
    const [state, setstate] = React.useState({
        email:'guest@gmail.com',
        password : '123456',
    })
  
  const onLogin = e => {
      e.preventDefault();
      authCtx.dispatch(login())

  }
  
      const handleChange = e => {
        const {name,value} = e.target
         setstate({
             ...state,
            [name] : value
        })
        
    }
    return (
        <div className={classes.bg}>
            <Paper className={classes.paper}>
                <div className={classes.txtField}>
                <TextField
                    name='email'
                    fullWidth
                    value={state.email}
                    onChange={handleChange}
                    label='Email'
                    variant="outlined"
                    type='text'
                    className={classes.form}
                />
                <TextField
                    name='password'
                    fullWidth
                    className={classes.form}
                    value={state.password}
                    onChange={handleChange}
                    label='Password'
                    variant="outlined"
                    type='password'
                />
                <Button fullWidth variant="contained" color="primary" onClick={onLogin}>
                    Login
                </Button>
                </div>
                <Link className={classes.link} to='#'>Forgot Password?</Link>
            </Paper>
        </div>
    )
}

export default Login
