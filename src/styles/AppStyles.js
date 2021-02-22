import { makeStyles } from '@material-ui/core/styles';
import sizes from '../helpers/sizes';

export default makeStyles({
  App: {
    width: '50%',
    margin: '0 auto',
    [sizes.down('md')]: {
      width: '70%'
    },
    [sizes.down('xs')]: {
      width: '90%'
    }
  },
  header: {
    textAlign: 'center',
    '& h1': {
      color: '#1C0F0A ',
      margin: '5vh 0 0 0',
      fontSize: '5rem',
      fontWeight: '300',
      '& span': {
        color: '#D54700' ,
        fontWeight: '700'
      },
      [sizes.down('xs')]: {
        fontSize: '4.5rem'
      }
    },
    '& h2': {
      color: '#676767',
      fontSize: '1rem',
      fontWeight: '300',
      [sizes.down('xs')]: {
        fontSize: '0.6rem'
      }
    }
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    color: '#81b3d2',
    fontSize: '0.7rem',
    position: 'relative',
    textDecoration: 'none',
    transition: '0.5s color ease'
  }
});
