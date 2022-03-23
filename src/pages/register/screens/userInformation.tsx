import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, } from 'react'
import { useForm } from 'react-hook-form'
import { StatusBar,StyleSheet, View, Dimensions } from 'react-native'
import Form from 'src/components/form'
import { userInformationSchema } from 'src/components/formSchemas'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import colors from 'src/styles/colors'
import RegisterContext from '../context'
import RegisterScreenWrapper from '../screenWrapper'
import registerStyles from '../styles'


const styles = StyleSheet.create({

  main:{
    display:"flex", justifyContent: "flex-start", flex:1,
    height: Dimensions.get("window").height - (StatusBar.currentHeight || 0), 
  },
  title:{
    fontSize: 24, marginBottom: 8, letterSpacing: 0.18, lineHeight: 24, paddingTop: 13
  },
  p: {
    fontSize: 16, lineHeight: 24, letterSpacing: 0.5, marginBottom: 32, color: colors.textSecondary
  },
  contextBox: {
    flex: 1, justifyContent: "space-between", paddingBottom: 32
  },
  inputStyle: {
    fontSize: 16, lineHeight: 24, letterSpacing: 0.5, color: colors.textTerciary
  },
  inputMargin: {
    marginBottom: 24
  }
})

type formProps = {
  name : string,
  lastName : string,
  email : string
}
export default function UserInformation(props : RegisterStackScreenProps<"UserInfo">){
  const {formState: {errors}, register, setValue, handleSubmit, watch} = useForm<formProps>({resolver : yupResolver(userInformationSchema)})
  const watchers = watch(["email", "lastName", "name"])
  const {updateData} = useContext(RegisterContext);
  const submitHandler = (data : formProps) => {
    updateData(data)
    props.navigation.push("UserPassword")
  }
  
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()} backIcon="exit"
     style={[registerStyles.main, styles.contextBox ]} >
      <View  >
        <TextApp style={styles.title} >Información Personal</TextApp>
        <TextApp style={styles.p} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vestibulum, purus ut enim.</TextApp>
        <Form errors={errors} register={register} setValue={setValue}  >
          <LoginInput name='name' placeholder='Nombre' style={styles.inputMargin} inputStyles={styles.inputStyle} />
          <LoginInput name='lastName' placeholder='Apellido' style={styles.inputMargin} inputStyles={styles.inputStyle} />
          <LoginInput name='email' placeholder='Correo Electrónico' style={styles.inputMargin} inputStyles={styles.inputStyle} />
        </Form>
      </View>
      <LoginButton disabled={!(watchers.every((v) => v)) /* false if all the inputs have vals*/}
        theme='signin'  title='CONTINUAR' onPress={handleSubmit(submitHandler)} />
    </RegisterScreenWrapper>
  )
}
