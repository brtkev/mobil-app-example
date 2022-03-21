import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { StatusBar,StyleSheet, View, Keyboard, Dimensions } from 'react-native'
import Form from 'src/components/form'
import { useInformationSchema } from 'src/components/formSchemas'
import LoginButton from 'src/components/loginButton'
import LoginInput from 'src/components/loginInput'
import NavTop from 'src/components/navTop'
import PageWrapper from 'src/components/pageWrapper'
import TextApp from 'src/components/textApp'
import {RegisterStackScreenProps} from 'src/components/types'
import RegisterScreenWrapper from '../screenWrapper'
import registerStyles from '../styles'



const styles = StyleSheet.create({

  main:{
    display:"flex", justifyContent: "flex-start", flex:1,
    height: Dimensions.get("window").height - (StatusBar.currentHeight || 0)
  },
  contextBox: {
    flex: 1, justifyContent: "space-between"
  },
  inputStyle: {
    fontSize : registerStyles.textP.fontSize
  }
})

type formProps = {
  name : string,
  lastName : string,
  email : string
}
export default function UserInformation(props : RegisterStackScreenProps<"UserInfo">){
  const {formState: {errors}, register, setValue, handleSubmit, watch} = useForm<formProps>({resolver : yupResolver(useInformationSchema)})
  const watchers = watch(["email", "lastName", "name"])
  const submitHandler = (data : formProps) => {
    props.navigation.push("UserPassword", Object.assign({}, props.route.params, data))
  }
  
  return(
    <RegisterScreenWrapper backHandler={() => props.navigation.goBack()}
     style={[registerStyles.main, styles.contextBox ]} >
      <View  >
        <TextApp style={registerStyles.title} >Información Personal</TextApp>
        <TextApp style={[registerStyles.textP, {marginBottom: 32}]} >Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Vestibulum, purus ut enim.</TextApp>
        <Form errors={errors} register={register} setValue={setValue}  >
          <LoginInput name='name' placeholder='Nombre' inputStyles={styles.inputStyle} />
          <LoginInput name='lastName' placeholder='Apellido' inputStyles={styles.inputStyle} />
          <LoginInput name='email' placeholder='Correo Electrónico' inputStyles={styles.inputStyle} />
        </Form>
      </View>
      <LoginButton disabled={!(watchers.every((v) => v)) /* false if all the inputs have vals*/}
        theme='signin'  title='CONTINUAR' onPress={handleSubmit(submitHandler)} />
    </RegisterScreenWrapper>
  )
}
