import { View } from 'react-native';
import TextApp from 'src/components/textApp'

const  Separator = ( ) => {

  return(
    <View>
      <View></View>
      <TextApp>O</TextApp>
      <View></View>
    </View>
  );
}
export default Separator;
// const Separator: FC = () => {
//   return(
//     <div className=' relative flex w-full items-center my-4' >
//       <div className='bg-terciary-p-color relative w-full h-px' ></div>
//       <p className='mx-2 text-title-color text-sm' >O</p>
//       <div className='bg-terciary-p-color relative w-full h-px' ></div>
//     </div>
//   );
// }
