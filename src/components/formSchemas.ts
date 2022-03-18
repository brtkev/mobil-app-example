import * as yup from 'yup';

const onlyNumbersRegex = /^\d+$/;
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

const lowerCaseRegex = /(?=.*[a-z])/;
const upperCaseRegex = /(?=.*[A-Z])/;
const numberRegex = /(?=.*\d)/;

export const registerSchema = yup.object().shape({
  name: yup.string().required('ingresa tu nombre completo'),
  email: yup.string()
    .lowercase()
    .email('ingrese un email valido')
    .required('ingresa un email'),
  password: yup.string()
    .min(8, 'la contraseña debe de tener al menos 8 caracteres')
    .matches(lowerCaseRegex, 'la contraseña necesita al menos una minuscula')
    .matches(upperCaseRegex, 'la contraseña necesita al menos una mayuscula')
    .matches(numberRegex, 'la contraseña necesita al menos un numero')
    .required("ingresa una contraseña"),
  passwordConfirm : yup.string()
    .oneOf([yup.ref('password')], 'la contraseña no coincide')
    .required('campo obligatorio'),
  subscription : yup.bool()
})