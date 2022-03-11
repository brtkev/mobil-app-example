import {View, Button, Image, Text, StatusBar, Alert} from 'react-native';
import styles from './styles';
import LoginButton from 'src/components/loginButton';

import { RootStackParamList } from 'src/components/types';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
type props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function Home({navigation  } : props) {
    return (
      // <View style={styles.container} >
      <View style={styles.container} >
        <StatusBar />
        <Image  style={styles.welcomeImage} source={require('../../../assets/welcome-image.png')} />
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
          {/* <Button title='INICIAR SESIÓN' onPress={() => Alert.alert('Simple Button pressed')} /> */}
          <View style={styles.buttonsContainer} >
            <LoginButton style={{marginRight:16}} title='INICIAR SESIÓN' onPress={() => navigation.navigate('Login')} />
            <LoginButton theme="red" title='CREAR CUENTA' onPress={() => navigation.navigate('Register')} />
          </View>
          
        </View>
        {/* <Button
          title={`Go to Details`}
          onPress={() => navigation.navigate('Login')}
        /> */}
      </View>
    );
  }



// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: 'red',
//     // minWidth: '100%',
//     minHeight: '100%',
//     paddingHorizontal: '16px',
//     paddingBottom: '24px',

//   },
//   // image: {
//   //   width : '100vw',
//   //   height : 'auto'
//   // },
//   // loginButton: {
//   //   fontFamily : 'Poppins',
//   //   fontWeight : '500',
//   //   fontSize : 14,
//   //   lineHeight: 16,
//   //   display: "flex",
//   //   alignItems: "center",
//   //   textAlign: "center",
//   //   letterSpacing: 1.25,
//   //   color: '#FFFFFFE5',
//   //   opacity: 0.87,
//   //   padding: '16px 18px'
//   // }
// });