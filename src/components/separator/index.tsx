import { View, ViewProps } from 'react-native';
import TextApp from 'src/components/textApp'
import styles from './style';

const  Separator = ({style}: ViewProps ) => {

  return(
    <View style={[styles.container, style]} >
      <View style={styles.bar} ></View>
      <TextApp style={styles.text} >O</TextApp>
      <View style={styles.bar} ></View>
    </View>
  );
}
export default Separator;
