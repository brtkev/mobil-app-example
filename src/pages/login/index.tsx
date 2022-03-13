import { View, StatusBar, ScrollView, SafeAreaView, Image } from 'react-native';
import LoginButton from 'src/components/loginButton';
import Separator from 'src/components/separator';

import TextApp from 'src/components/textApp';
import LoginForm from './form';
import styles from './styles';

export default function Login() {


	return (
		<View style={styles.mainContainer} >
			<StatusBar />
			<SafeAreaView  style={{flex:1}} ><ScrollView style={styles.scrollView} >
				<View style={styles.contentBox} >
					<Image source={require('assets/logo.png')} style={styles.logo} />
					<TextApp style={{fontSize: 34, lineHeight: 36,marginBottom: 24}} >
						Iniciar Sesión
					</TextApp>
					<LoginForm />
					<Separator style={{marginBottom: 24, marginTop:32}} />
					<LoginButton theme='social' social='google' style={{marginBottom: 16}} title='Continuar con Google' onPress={() => console.log("google press")} />
					<LoginButton theme='social' social='facebook' style={{marginBottom: 16}} title='Continuar con Facebook' onPress={() => console.log("facebook press")} />
				</View>
			</ScrollView></SafeAreaView>
		</View>
	);
}