import { View, StatusBar, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
import LoginButton from 'src/components/loginButton';
import Separator from 'src/components/separator';

import TextApp from 'src/components/textApp';
import LoginForm from './form';
import GoToRegister from './goToRegister';
import styles from './styles';

import PageWrapper from 'src/components/pageWrapper';
import { RootStackParamList } from 'src/components/types'
import { NativeStackScreenProps  } from '@react-navigation/native-stack';


type props = NativeStackScreenProps<RootStackParamList, 'Login'>;
// radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0) 100%);
export default function Login({navigation} : props) {

	const forgetPasswordPush = () => navigation.navigate("RecoverPassword")
	const registerPush = () => navigation.navigate("Register")
	return (
		<PageWrapper scrollable ><View style={styles.contentBox} >
			<View style={styles.logoContainer}> 
				<Image source={require('assets/images/radial-gradient.png')} style={styles.radialGradient} />
				<Image source={require('assets/logos/logo.png')} style={styles.logo} />
				<TextApp style={styles.title} >
					Iniciar Sesión
				</TextApp>
			</View>
			<LoginForm forgetPasswordOnPress={forgetPasswordPush} />
			<Separator style={{marginBottom: 24, marginTop:32}} />
			<LoginButton theme='social' leftIcon={require('assets/logos/google-logo.png')} style={{marginBottom: 16}} title='Continuar con Google' onPress={() => console.log("google press")} />
			<LoginButton theme='social' leftIcon={require('assets/logos/facebook-logo.png')} style={{marginBottom: 44}} title='Continuar con Facebook' onPress={() => console.log("facebook press")} />
			<GoToRegister onPress={registerPush} />
		</View></PageWrapper>
	);
}