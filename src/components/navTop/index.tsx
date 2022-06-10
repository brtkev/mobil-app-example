import {Image, View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from './styles'
import TextApp from 'src/components/textApp'


interface Props extends TouchableOpacityProps{
  backIcon? : "back" | "exit",
  title?: string
}


const getBackIcon = (backIcon? : "back" | "exit") => {
  if(!backIcon || backIcon === "back"){
    return require('assets/icons/arrow-left.png');
  }else if(backIcon === "exit") return require('assets/icons/exit.png')
}

//navTop with return button, returns to the last stack screen
const NavTop = ({ onPress, backIcon, title,...props} : Props) => {
  return(
    <View style={styles.main}>
      <TouchableOpacity style={styles.touchable} onPress={onPress} >
        <Image style={styles.icon} source={getBackIcon(backIcon)} />
      </TouchableOpacity>
      <TextApp style={styles.title} >{title}</TextApp>
    </View>
  )
}
export default NavTop;