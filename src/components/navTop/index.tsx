import {Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from './styles'


//navTop with return button, returns to the last stack screen
const NavTop = ({ onPress,...props} : TouchableOpacityProps) => {
  return(
    <View style={styles.main}>
      <TouchableOpacity style={styles.touchable} onPress={onPress} >
        <Image style={styles.icon} source={require('assets/icons/arrow-left.png')} />
      </TouchableOpacity>
    </View>
  )
}
export default NavTop;