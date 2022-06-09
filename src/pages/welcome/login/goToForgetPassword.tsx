import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import TextApp from 'src/components/textApp';
import colors from 'src/styles/colors';

const GoToForgetPassword = ({onPress} : TouchableOpacityProps) => {
	return(
		<View style={{width:"100%", display:"flex", alignItems:"flex-end", marginBottom:24}} >
      <TouchableOpacity  onPress={onPress} >
        <TextApp style={{color:colors.secondary[200]}} >¿Olvidaste tu contraseña?</TextApp>
      </TouchableOpacity>
    </View>
	)
}
export default GoToForgetPassword;
