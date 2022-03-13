import { View, StatusBar, SafeAreaView, ScrollView, ViewProps } from 'react-native';
import styles from './styles';

const PageWrapper = ({children} : ViewProps) => {

  return(
    <View style={styles.main} >
			<StatusBar />
			<SafeAreaView  style={{flex:1}} ><ScrollView style={styles.scrollView} >
        {children}
      </ScrollView></SafeAreaView>
		</View>
  )
}

export default PageWrapper;