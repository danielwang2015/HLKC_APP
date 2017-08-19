import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  CA_BackGround:{
    flexDirection:'row',
    justifyContent: 'space-around',

  },
  CA_BackGroundRow:{
    flexDirection:'column',
    alignItems:'center',
    marginTop:5,
  },
  CA_Image:{
    width:170,
    height:170,
    marginTop:3,
    resizeMode:'cover',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  },
  folderPic:{
    width:120,
    height:120,
  },
});

export default styles;
