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

export default function SelectDropdown(){
  return(
    <Select placeholder='Text123'/>
  )
}