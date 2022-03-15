import { Text, TextProps } from 'react-native';
import styles from './style';


//default text for the app
const TextApp = ({style, children} : TextProps) => {

  return(
    <Text style={[styles.text, style]} >
      {children}
    </Text>
  )
}
export default TextApp;