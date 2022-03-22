import { useState } from 'react'
import { StyleSheet } from 'react-native'
import ImportedSelectDropdown from 'react-native-select-dropdown'
import colors from 'src/styles/colors'
import Select from '../loginInput/select'
const countries = ["Egypt", "Canada", "Australia", "Ireland"]

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
  }
})

interface Props {
  items : Array<{text : string, value : number }>,

}

export default function SelectDropdown({items} : Props){
  const [dropDown, setDropDown] = useState(false);

  return(
    <>
    <Select placeholder='Text123' onPress={() => console.log("aaaaa")}/>
    {dropDown && <Select option placeholder='option1' onPress={() => console.log("aaaaa")}/>}
    </>
  )
}