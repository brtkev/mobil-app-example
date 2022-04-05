import { useState } from "react";
import { Alert, TouchableOpacityProps } from "react-native"; 

import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from 'src/components/formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginInput from 'src/components/loginInput';
import LoginButton from "src/components/loginButton";
import Form from "src/components/form";
import GoToForgetPassword from "./goToForgetPassword";

import TextApp from 'src/components/textApp'

type loginInput = {
  email: string,
  password: string,
};

const LoginForm = (props : {
  forgetPasswordOnPress ?: TouchableOpacityProps["onPress"]
}) =>  {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<loginInput>({mode : "onChange", resolver : yupResolver(loginSchema)});
  
  const watchers = watch(["email", "password"]);
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  //onSubmit
  const submitHandler : SubmitHandler<loginInput> = (data, ev) => {
    Alert.alert("data", JSON.stringify(data));
    setSpinnerFlag(true);
    //after fetching the results from the db if the data fails the spinner should stop
    setTimeout(() => setSpinnerFlag(false), 2000);
   }

  const sumbitCallback = handleSubmit(submitHandler);
  return(
    <Form {...{register, setValue, errors}} >
      <LoginInput  label='Correo Electrónico' placeholder='Correo Electrónico' name="email" style={{marginBottom: 24}} />
      <LoginInput label='Contraseña' placeholder='Contraseña' name="password" style={{marginBottom: 32}}
       password />
      <GoToForgetPassword onPress={props.forgetPasswordOnPress} />

      <LoginButton style={{width:"100%"}} theme="signin" title="INGRESAR" spinner={spinnerFlag}
       onPress={sumbitCallback} disabled={!(watchers.every((v) => v))/*false if all inputs have values*/} />
    </Form>
  )
}
export default LoginForm;