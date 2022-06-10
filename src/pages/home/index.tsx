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

const constants = {
  homeRadialImage : require('assets/images/homeRadial.png'),
  homeLogo : require('assets/images/homeLogo.png'),
  cashInButtonStyle : [styles.button, {marginRight: 15, backgroundColor: colors.green[400], borderWidth: 0}],
  cashOutButtonStyle : [styles.button, {backgroundColor: colors.primary[400], borderWidth: 0}],
  trendingUpIcon : require('assets/icons/trending-up.png'),
  trendingDownIcon : require('assets/icons/trending-down.png'),
  paperPlainIcon : require('assets/icons/paper-plain.png'),
  homeIcon : require('assets/icons/home1.png'),
  clockIcon : require('assets/icons/Clock.png'),
  giftIcon : require('assets/icons/Gift.png'),
  menuIcon : require('assets/icons/Hamburger_MD.png'),
  homeBottomRadial : require('assets/images/home-bottom-ellipse.png')
}
function Home({navigation  } : props) {
    const navigate = () => navigation.navigate('Register');

    return (
      <PageWrapper style={styles.page} >
        <View>
          <View style={styles.logoContainer}> 
            <Image source={constants.homeRadialImage} style={styles.radial} />
            <Image  source={constants.homeLogo} style={styles.logo} />
          </View>
          <View style={styles.balanceContainer}  >
            <TextApp style={styles.greetingsText} >
              Hola, Jhon Doe
            </TextApp>
            <TextApp style={styles.totalBalanceText} >
              Saldo total:
            </TextApp>
            <TextApp  >
              <TextApp style={styles.balanceText} >$300.00 </TextApp>
              <TextApp  style={styles.currencyText} >
                USD
              </TextApp>
            </TextApp>
          </View>
          <View style={styles.buttonContainer} >
            <Button  
              leftIcon={constants.trendingUpIcon}
              leftIconStyle={styles.buttonLeftIconStyle}
              style={constants.cashInButtonStyle}
              title="CARGAR"
              onPress={()=>{}}
              />
            <Button  
              leftIcon={constants.trendingDownIcon}
              leftIconStyle={styles.buttonLeftIconStyle}
              style={constants.cashOutButtonStyle}
              title="RETIRAR"
              onPress={()=>{}}
              />
          </View>
        </View>
        <NavBar />
        <Image source={constants.homeBottomRadial} style={styles.bottomRadial} />
      </PageWrapper>
    );
  }

export default Home;


function NavBar(){
  return(
    <View style={styles.navBarContainer} >
      <Button 
        title="" 
        onPress={()=>{}} 
        leftIcon={constants.homeIcon}
        leftIconStyle={styles.navBarIcon}
        style={styles.navBarButton}
        />
      <Button 
        title="" 
        onPress={()=>{}} 
        leftIcon={constants.clockIcon}
        leftIconStyle={styles.navBarIcon}
        style={styles.navBarButton}
        />      
      <Button 
          title="" 
          onPress={()=>{}} 
          leftIcon={constants.paperPlainIcon}
          leftIconStyle={styles.navBarIcon}
          style={styles.paperPlainButton}
          />
      <Button 
        title="" 
        onPress={()=>{}} 
        leftIcon={constants.giftIcon}
        leftIconStyle={styles.navBarIcon}
        style={styles.navBarButton}
        />
      <Button 
        title="" 
        onPress={()=>{}} 
        leftIcon={constants.menuIcon}
        leftIconStyle={styles.navBarIcon}
        style={styles.navBarButton}
        />      
    </View>
   );
}