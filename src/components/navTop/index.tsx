import {Image, View, TouchableOpacity} from 'react-native'
import styles from './styles'


import {AnyRootStackScreenProps} from 'src/components/types'
const NavTop = ({navigation, route} : AnyRootStackScreenProps) => {
  return(
    <View style={styles.main}>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.goBack()} >
        <Image style={styles.icon} source={require('assets/arrow-left.png')} />
      </TouchableOpacity>
    </View>
  )
}
export default NavTop;