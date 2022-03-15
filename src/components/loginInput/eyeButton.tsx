import { View, TouchableOpacity, Image, TouchableOpacityProps } from "react-native"
import styles from "./styles"

type EyeButtonProps = {
  password : boolean | undefined, onPress? : TouchableOpacityProps["onPress"]
}


//adds an eye button to the right of the container
//password has to be true for the button to show
const EyeButton = ({password, onPress} : EyeButtonProps) => {
  return(
    password  ? 
    <View  style={[styles.iconContainer]} onTouchEnd={onPress} >
        <Image style={styles.eyeIcon} source={require('assets/icons/eye-icon.png')} />
    </View>
    : null
  )
}

export default EyeButton;