import {View, TextInput} from 'react-native';
import TextApp from '../textApp';
import styles from './styles';

const LoginInput = () => {

  return(
    <View style={styles.container}  >
      <TextInput placeholder='Correo Electrónico' placeholderTextColor={"#fff"} style={{color:"#fff"}} />
    </View>
  );
};

export default LoginInput;