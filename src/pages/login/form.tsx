import { useState, useRef } from "react";
import { View, Alert } from "react-native"; 

import { useForm, SubmitHandler } from "react-hook-form";
import { loginSchema } from 'src/components/formSchemas';
import { yupResolver } from '@hookform/resolvers/yup';

import LoginInput from 'src/components/loginInput';
import LoginButton from "src/components/loginButton";
import Form from "src/components/form";
import GoToForgetPassword from "./goToForgetPassword";

type loginInput = {
  email: string,
  password: string,
};

const LoginForm = () =>  {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<loginInput>({resolver : yupResolver(loginSchema)});
  const [spinnerFlag, setSpinnerFlag] = useState(false);
  const refs = useRef(Array(3));
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
       onEndEditing={sumbitCallback} />
      <GoToForgetPassword onPress={() => console.log("press on forget password")} />
      <LoginButton style={{width:"100%"}} theme="signin" title="INGRESAR" onPress={sumbitCallback} />
    </Form>
  )
}
export default LoginForm;