import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '20px 0',
    shadowColor:'#3b82f6',
    WebkitBoxShadow: true,
    WebkitShadowColor: '#3b82f6',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 30px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  logo: {
    fontSize: '2rem',
    textDecoration: 'none',
    WebkitTextDecoration: 'none',
    fontFamily: 'poppins',
    textTransform: 'uppercase',
    letterSpacing:1.5,
    fontWeight: 'bold',
    background: "-webkit-linear-gradient(0deg, #3b82f6 30%, #8b5cf6 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    // fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      // marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 10
  },

  Button: {
    background: "-webkit-linear-gradient(0deg, #3b82f6 30%, #8b5cf6 90%)",
  }
}));
