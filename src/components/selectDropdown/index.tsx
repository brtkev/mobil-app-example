import { useState } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import colors from 'src/styles/colors'
import Select from './select'

const styles = StyleSheet.create({
  container:{
    backgroundColor : colors.inputs,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    width: '100%',
  },
  buttonText:{
    color: colors.textTerciary,
    fontSize: 20,
  },
  optionContainer:{
    position: "absolute", top: 20, right: 0, left: 0, zIndex: 1000
  }
})

interface Props extends ViewProps{
  items : Array<string>,
  placeholder : string,
  onSelectValue? : (d : string, i : number ) => void,
  initialValue? : number,
  inmutable?: boolean
}

type optionHandlerType = (item : string, i: number) => void
  
const options = (items : Array<string>, handler : optionHandlerType) => items.map((item, i) => {
  return(
    <Select key={i} option placeholder={item} onPress={() => handler(item, i)}/>
  )
})

export default function SelectDropdown({items, placeholder, onSelectValue, ...props} : Props){
  const [dropDown, setDropDown] = useState(false);
  const [currentValue, setCurrentValue] = useState<string|undefined>(props.initialValue ? items[props.initialValue] : undefined);
  useState(() => {
    console.log("render")
    if(typeof props.initialValue === "number"){
      console.log("pass")
      onSelectValue && onSelectValue(items[props.initialValue], props.initialValue)
    } 
  })
  const toggleDropDown = () => !props.inmutable && setDropDown((prev) => !prev)
  const optionHandler : optionHandlerType = (item : string, i: number) => {
    setCurrentValue(item);
    toggleDropDown();
    onSelectValue && onSelectValue(item, i);
  } 
  const [selectOffset, setSelectOffset] = useState(0);
  return(
    <View {...props}>
    <Select onLayout={e => setSelectOffset(e.nativeEvent.layout.height)} 
      placeholder={currentValue || placeholder} selected={currentValue !== undefined} onPress={toggleDropDown}
      open={dropDown} inmutable={props.inmutable}
    />
      <View style={[styles.optionContainer, {top: selectOffset + 8}]}>
        {dropDown && options(items, optionHandler)}
      </View>
    </View>
  )
}