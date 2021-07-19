import { deepPurple } from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      image: {
        marginLeft: '15px',
      },
      branchContainer:{
        display: 'flex',
        alignItems: 'center'
      },
      toolbar:{
        display: 'flex',
        justifyContent: 'flex-end',
        maxWidth: '800px'
      },
      profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width:'400px'
      },
      purple: {
          color: theme.palette.getContrastText(deepPurple[500]),
          backgroundColor: deepPurple[500]
      },
      userName: {
        display: 'flex',
        alignItems: 'center'
      }
}))