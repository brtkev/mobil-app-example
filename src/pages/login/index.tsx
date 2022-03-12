import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import LoginInput from 'src/components/loginInput';
import TextApp from 'src/components/textApp';
import styles from './styles';

export default function Login() {


	return (
		<View style={styles.mainContainer} >
			<StatusBar />
			<View  style={styles.contentBox} >
				<Image source={require('assets/logo.png')} style={styles.logo} />
				<TextApp style={{fontSize: 34, lineHeight: 36,marginBottom: 24}} >
					Iniciar Sesión
				</TextApp>
				<LoginInput label='Correo Electrónico' placeholder='Correo Electrónico' style={{marginBottom: 24}} />
				<LoginInput label='Contraseña' placeholder='Contraseña' password/>
			</View>
		</View>
	);
}