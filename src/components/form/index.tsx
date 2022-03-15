import React, { useEffect, useRef, useState } from "react"
import {TextInput} from 'react-native'

import {UseFormRegister, FieldErrors, UseFormSetValue} from 'react-hook-form'

type Props = {
  children? : React.ReactElement | React.ReactElement[],
  register : UseFormRegister<any>,
  errors : FieldErrors<any>,
  setValue : UseFormSetValue<any>
}


/* custom form component */
// this component takes react-hook-form useForm params
//and applies them to TextInput children which has been named "child.props.name"
const Form = ({children, register, errors, setValue} : Props) => {
  const refs = useRef<Array<TextInput>>([]);
  return(
    <>
      {React.Children.map(children,  (child, i) => {
        if(child?.props.name){
          return React.cloneElement(child, {
            error : errors[child.props.name],
            key : child.props.name,
            onChangeText : (v : string) => setValue(child.props.name, v), //<-- will set the value for the input in useForm
            onSubmitEditing : () => refs.current[i+1] && refs.current[i+1].focus(),//<-- focuses the next input in the form
            ...register(child.props.name, {value: ''}), 
            ref : (el : TextInput)  => refs.current.push(el),
          });
        }else{
          return child;
        }
      })}
    </>
  )
}
export default Form;