import {View, Image,} from 'react-native';
// import styles from './styles';
import Button from 'src/components/button';
import colors from 'src/styles/colors';
import TextApp from 'src/components/textApp'
import NavTop from 'src/components/navTop';

import { HomeStackParamList } from 'src/components/types';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import PageWrapper from 'src/components/pageWrapper';

type props = NativeStackScreenProps<HomeStackParamList, 'charge'>;
function Charge({navigation} : props){
	return(
		<PageWrapper>
			<NavTop title="Cargar" backIcon="exit" onPress={() => navigation.goBack()} />
			<TextApp>Charge page</TextApp>

		</PageWrapper>
	);
}

export default Charge;