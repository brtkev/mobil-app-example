import { Text, TextProps } from 'react-native';
import styles from './style';

const TextApp = ({style, children} : TextProps) => {

  return(
    <Text style={Object.assign({}, styles.text, style)} >
      {children}
    </Text>
  )
}
export default TextApp;