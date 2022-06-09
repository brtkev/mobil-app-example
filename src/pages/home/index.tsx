import {View, Image, Text, StatusBar, Alert} from 'react-native';
import styles from './styles';
import LoginButton from 'src/components/loginButton';
import Button from 'src/components/button';
import colors from 'src/styles/colors';
import TextApp from 'src/components/textApp'

import { WelcomeStackParamList } from 'src/components/types';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import PageWrapper from 'src/components/pageWrapper';
type props = NativeStackScreenProps<WelcomeStackParamList, 'Welcome'>;

function Home({navigation  } : props) {
    const navigate = () => navigation.navigate('Register');
    return (
      <PageWrapper>
        <View style={styles.logoContainer}> 
          <Image source={require('assets/images/homeRadial.png')} style={styles.radial} />
          <Image  source={require('assets/images/homeLogo.png')} style={styles.logo} />
        </View>
        <View style={styles.balanceContainer}  >
          <TextApp style={{marginBottom : 8, fontSize: 16}} >
            Hola, Jhon Doe
          </TextApp>
          <TextApp style={{marginBottom : 16, fontSize: 14}} >
            Saldo total:
          </TextApp>
          <TextApp  >
            <TextApp style={{fontSize: 34}} >$300.00 </TextApp>
            <TextApp  style={{marginLeft: 8, fontSize: 16}} >
              USD
            </TextApp>
          </TextApp>
        </View>
        <View style={styles.buttonContainer} >
          <Button  
            leftIcon={require('assets/icons/trending-up.png')}
            leftIconStyle={{width: 16, height: 16, marginLeft: 32}}
            style={[styles.button, {marginRight: 15, backgroundColor: colors.green[400], borderWidth: 0}]}
            title="CARGAR"
            onPress={()=>{}}
            />
          <Button  
            leftIcon={require('assets/icons/trending-down.png')}
            leftIconStyle={{width: 16, height: 16, marginLeft: 32}}
            style={[styles.button, {backgroundColor: colors.primary[400], borderWidth: 0}]}
            title="RETIRAR"
            onPress={()=>{}}
            />
        </View>

      </PageWrapper>
    );
  }

export default Home;