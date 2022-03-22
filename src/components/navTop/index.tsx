import {Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from './styles'


interface Props extends TouchableOpacityProps{
  backIcon? : "back" | "exit"
}


const getBackIcon = (backIcon? : "back" | "exit") => {
  if(!backIcon || backIcon === "back"){
    return require('assets/icons/arrow-left.png');
  }else if(backIcon === "exit") return require('assets/icons/exit.png')
}

//navTop with return button, returns to the last stack screen
const NavTop = ({ onPress, backIcon,...props} : Props) => {
  return(
    <View style={styles.main}>
      <TouchableOpacity style={styles.touchable} onPress={onPress} >
        <Image style={styles.icon} source={getBackIcon(backIcon)} />
      </TouchableOpacity>
    </View>
  )
}
export default NavTop;