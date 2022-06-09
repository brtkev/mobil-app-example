import {View, Image, Text, StatusBar, Alert} from 'react-native';
import styles from './styles';
import LoginButton from 'src/components/loginButton';
import Button from 'src/components/button';
import colors from 'src/styles/colors';

import { WelcomeStackParamList } from 'src/components/types';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import PageWrapper from 'src/components/pageWrapper';
type props = NativeStackScreenProps<WelcomeStackParamList, 'Welcome'>;

function Welcome({navigation  } : props) {
    const navigate = () => navigation.navigate('Register');
    return (
      <PageWrapper>
        <Image  style={styles.welcomeImage} source={require('assets/images/welcome-image.png')} />
        <View style={styles.contentBox} >
          <View  style={styles.textBox}>
            <Text style={styles.whitepayText} >
              WhitePay
            </Text>
            <Text style={styles.titleText} >
              ¡La mejor billetera en dolares online!
            </Text>
            <Text style={styles.pText} >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi ut duis lorem vitae, scelerisquest.Lorem  
            </Text>
          </View>
          <View style={styles.buttonsContainer} >
            <LoginButton style={{marginRight:16}} title='INICIAR SESIÓN' onPress={() => navigation.navigate('Login')} />
            <Button 
              title='CREAR CUENTA'
              onPress={navigate}
              style={{
                backgroundColor: colors.secondary[300],
                borderWidth: 0
              }}
              stylePress={{
                backgroundColor: colors.secondary[200]
              }}
              />
          </View>
          
        </View>
      </PageWrapper>
    );
  }

export default Welcome;