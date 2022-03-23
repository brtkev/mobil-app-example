import {View, TouchableOpacity, TouchableOpacityProps, StyleSheet, Image} from 'react-native'
import TextApp from 'src/components/textApp';
import colors from 'src/styles/colors';

const styles = StyleSheet.create({
	container:{
		display:"flex", justifyContent:"center", alignItems: "center", position: "relative",
		height: 175,
		bottom: -50
	},
	radial:{
		width: 460, height: 275
	},
	textContainer: {
		display:"flex", flexDirection:"row", position: "absolute"
	}
});

const GoToRegister = ({onPress} : TouchableOpacityProps) => {
	return(
		<View style={styles.container} >
			<Image style={styles.radial} source={require('assets/images/bottom-radial.png')} />
			<View style={styles.textContainer} >
				<TextApp style={{fontSize: 14, paddingTop: 2}} >
					¿No tienes cuenta?&nbsp;
				</TextApp>
				<TouchableOpacity  onPress={onPress} >
					<TextApp style={{color:colors.secondary[200], fontSize:16}} >
						Registrate
					</TextApp>
				</TouchableOpacity>
			</View>
		</View>
	)
}
export default GoToRegister;