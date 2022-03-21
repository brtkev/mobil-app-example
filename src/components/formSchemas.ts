import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const onlyNumbersRegex = /^\d+$/;
const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numberRegex = /(?=.*\d)/;

export const verifyCodeSchema = yup.object().shape({
  code: yup.string().required("ingresa el codigo")
  .min(4, "el minimo es 4").max(8, "el maximo es 8")
  .matches(onlyNumbersRegex, "ingrese solo numeros")
})

export const loginSchema = yup.object().shape({
  email: yup.string()
    .email('ingrese un email valido')
    .required('ingresa un email'),
  password: yup.string().required("ingresa una contraseña")
    // .string().min(4, 'Password must contain at least 4 characters')
    // .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, "password needs at last 1 number [0-9] and 1 letter [a-Z]"),
});


export const userInformationSchema = yup.object().shape({
  name: yup.string().trim().required('ingresa tu nombre'),
  lastName: yup.string().trim().required('ingresa tu apellido'),
  email: yup.string().trim()
    .lowercase()
    .email('ingrese un email valido')
    .required('ingresa un email'),
  
  // subscription : yup.bool()
})

export const userPasswordSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'la contraseña debe de tener al menos 8 caracteres')
    .matches(lowerCaseRegex, 'la contraseña necesita al menos una minuscula')
    .matches(upperCaseRegex, 'la contraseña necesita al menos una mayuscula')
    .matches(numberRegex, 'la contraseña necesita al menos un numero')
    .required("ingresa una contraseña"),
  passwordConfirm : yup.string()
    .oneOf([yup.ref('password')], 'la contraseña no coincide')
    .required('campo obligatorio'),
})
