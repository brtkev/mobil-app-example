import React, { useRef, useState } from "react"
import {TextInput} from 'react-native'

import {UseFormRegister, FieldErrors, UseFormSetValue} from 'react-hook-form'

type Props = {
  children? : React.ReactElement | React.ReactElement[],
  register : UseFormRegister<any>,
  errors : FieldErrors<any>,
  setValue : UseFormSetValue<any>
}

const Form = ({children, register, errors, setValue} : Props) => {
  const refs = useRef<Array<TextInput>>([]);
  return(
    <>
    {React.Children.map(children,  (child, i) => {
      console.log(child);
      if(child?.props.name){
        return React.cloneElement(child, {
          ...register(child.props.name),
          error : errors[child.props.name],
          ref : (el : TextInput)  => refs.current.push(el),
          onChange : (v : string) => setValue(child.props.name, v),
          onSubmitEditing : () => refs.current[i+1] && refs.current[i+1].focus()
        });
      }else{
        return child;
      }
    })}
  </>
  )
}
export default Form;