import { View, StatusBar, ScrollView, SafeAreaView, Image, Alert, TouchableOpacity} from 'react-native';
import LoginButton from 'src/components/loginButton';
import Separator from 'src/components/separator';

import TextApp from 'src/components/textApp';
import LoginForm from './form';
import GoToRegister from './goToRegister';
import styles from './styles';

import { RootStackParamList } from 'src/components/types'
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import PageWrapper from 'src/components/pageWrapper';
type props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({navigation} : props) {


	return (
		<PageWrapper><View style={styles.contentBox} >
			<Image source={require('assets/logo.png')} style={styles.logo} />
			<TextApp style={{fontSize: 34, lineHeight: 36,marginBottom: 24}} >
				Iniciar Sesión
			</TextApp>
			<LoginForm />
			<Separator style={{marginBottom: 24, marginTop:32}} />
			<LoginButton theme='social' social='google' style={{marginBottom: 16}} title='Continuar con Google' onPress={() => console.log("google press")} />
			<LoginButton theme='social' social='facebook' style={{marginBottom: 44}} title='Continuar con Facebook' onPress={() => console.log("facebook press")} />
			<GoToRegister onPress={() => navigation.navigate("Register")} />
		</View></PageWrapper>
	);
}