import { useFonts } from 'expo-font';
import { Text, TextProps, TextStyle } from 'react-native';
import styles from './style';


//default text for the app
const TextApp = ({style, children} : TextProps) => {
  const [loaded] = useFonts({
    "Poppins-Regular" : require('assets/fonts/Poppins-Regular.ttf')
  })
  const fontFamily : TextStyle = {
    fontFamily: loaded ? "Poppins-Regular" : "sans-serif"
  }

  return(
    <Text style={[styles.text, fontFamily,style]} >
      {children}
    </Text>
  )
}
export default TextApp;