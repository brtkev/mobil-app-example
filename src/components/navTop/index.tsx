import {Image, View, TouchableOpacity} from 'react-native'
import styles from './styles'

import {AnyRootStackScreenProps} from 'src/components/types'

//navTop with return button, returns to the last stack screen
const NavTop = ({navigation, route} : AnyRootStackScreenProps) => {
  return(
    <View style={styles.main}>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()} >
        <Image style={styles.icon} source={require('assets/icons/arrow-left.png')} />
      </TouchableOpacity>
    </View>
  )
}
export default NavTop;