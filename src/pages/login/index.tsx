import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import Separator from 'src/components/separator';

import TextApp from 'src/components/textApp';
import LoginForm from './form';
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
				<LoginForm />
				<Separator />
			</View>
		</View>
	);
}