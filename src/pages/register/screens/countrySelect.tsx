import { StyleSheet, View } from "react-native"
import NavTop from "src/components/navTop"
import PageWrapper from "src/components/pageWrapper"
import TextApp from "src/components/textApp"
import Select from "src/components/loginInput/select"
import { RegisterStackScreenProps} from 'src/components/types'
import registerStyles from '../styles';

const styles = StyleSheet.create({
  main:{
    padding: 16
  },
})

const params = {
  venezuela:{
    placeholder: "Venezuela (+58)",
    rightIcon: require('assets/flags/venezuela-flag.png'),
    initialNumber : 58,
    country : "venezuela"
  },
  colombia: {
    placeholder: "Colombia (+57)",
    rightIcon: require('assets/flags/colombia-flag.png'),
    initialNumber : 57,
    country : "colombia"
  },
  argentina : {
    placeholder: "Argentina (+54)",
    rightIcon: require('assets/flags/argentina-flag.png'),
    initialNumber : 54,
    country : "argentina"
  },
  peru : {
    placeholder: "Peru (+51)",
    rightIcon: require('assets/flags/peru-flag.png'),
    initialNumber : 51,
    country : "peru"
  }
}
export default function CountrySelect(props: RegisterStackScreenProps<"CountrySelect">){
  return(
    <PageWrapper>
       <NavTop onPress={() => props.navigation.goBack()} />
        
      <View style={styles.main} >
        <TextApp  style={registerStyles.title}>Selecciona tu país</TextApp>
        <Select option rightIcon={params.venezuela.rightIcon} 
        onPress={() => props.navigation.navigate("Phone", params.venezuela)} style={{marginBottom:16}}
        placeholder={params.venezuela.placeholder} />
        <Select option rightIcon={params.colombia.rightIcon} 
        onPress={() => props.navigation.navigate("Phone", params.colombia)} style={{marginBottom:16}}
        placeholder={params.colombia.placeholder} />
        <Select option rightIcon={params.argentina.rightIcon} 
        onPress={() => props.navigation.navigate("Phone", params.argentina)} style={{marginBottom:16}}
        placeholder={params.argentina.placeholder} />
        <Select option rightIcon={params.peru.rightIcon} 
        onPress={() => props.navigation.navigate("Phone", params.peru)} style={{marginBottom:16}}
        placeholder={params.peru.placeholder} />
      </View>
    </PageWrapper>
  )
}