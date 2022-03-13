import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import TextApp from 'src/components/textApp';
import colors from 'src/styles/colors';

const GoToRegister = ({onPress} : TouchableOpacityProps) => {
	return(
		<View style={{display:"flex", flexDirection:"row", marginBottom: 32}} >
			<TextApp style={{lineHeight: 20}} >
				¿No tienes cuenta?&nbsp;
			</TextApp>
			<TouchableOpacity  onPress={onPress} >
				<TextApp style={{color:colors.secondary[200], fontSize:16}} >
					Registrate
				</TextApp>
			</TouchableOpacity>
		</View>
	)
}
export default GoToRegister;