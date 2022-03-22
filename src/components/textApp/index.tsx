
import { useContext } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import AppContext from 'src/appContext';
import styles from './style';


//default text for the app
const TextApp = ({style, children} : TextProps) => {
  const {poppinsLoaded} = useContext(AppContext);
  const fontFamily : TextStyle = {
    fontFamily: poppinsLoaded ? "Poppins-Regular" : "sans-serif"
  }
  return(
    <Text style={[styles.text, fontFamily, style]} >
      {children}
    </Text>
  )
}
export default TextApp;