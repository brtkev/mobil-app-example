import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: 'red',
//     // minWidth: '100%',
//     minHeight: '100%',
//     paddingHorizontal: '16px',
//     paddingBottom: '24px',

//   },
//   // image: {
//   //   width : '100vw',
//   //   height : 'auto'
//   // },
//   // loginButton: {
//   //   fontFamily : 'Poppins',
//   //   fontWeight : '500',
//   //   fontSize : 14,
//   //   lineHeight: 16,
//   //   display: "flex",
//   //   alignItems: "center",
//   //   textAlign: "center",
//   //   letterSpacing: 1.25,
//   //   color: '#FFFFFFE5',
//   //   opacity: 0.87,
//   //   padding: '16px 18px'
//   // }
// });
const styles = StyleSheet.create({
  container : {
    backgroundColor: colors.background, minHeight: '100%', display: "flex", 
  },
  welcomeImage : {
    width: Dimensions.get('window').width, height:'auto',aspectRatio: 1, 
  },
  contentBox : {
    paddingHorizontal: 16, paddingBottom: 24, display: "flex", flex: 1,
    alignItems: "center", justifyContent : "space-between", 
  },
  textBox : {
    display: "flex", alignItems: "center", justifyContent : "center",
  },
  whitepayText: {
    color: colors.secondary[300], fontWeight: "500", lineHeight: 24, fontSize: 20, marginTop : 8
  },
  titleText: {
    color: colors.textPrimary, lineHeight: 24, fontSize: 20, letterSpacing: 0.18,
    textAlign: "center", marginTop : 12
  },
  pText: {
    color: colors.textSecondary, lineHeight: 24, fontSize: 16, letterSpacing: 0.5,
    textAlign: "center", marginVertical : 24
  },
  buttonsContainer: {
    display:'flex',flexDirection:"row", justifyContent: 'center', 
  },
  redButton: {
    backgroundColor: colors.primary[400],
    borderWidth: 0
  }

});
export default styles;
/* BUTTON */

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 500;
// font-size: 14px;
// line-height: 16px;
// /* identical to box height, or 114% */

// display: flex;
// align-items: center;
// text-align: center;
// letter-spacing: 1.25px;

// color: rgba(255, 255, 255, 0.9);

// opacity: 0.87;

// /* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0;
// margin: 0px 10px;