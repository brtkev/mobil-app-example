import { View, StatusBar, SafeAreaView, ScrollView, ViewProps } from 'react-native';
import styles from './styles';

interface Props extends ViewProps{
  scrollable? : boolean
}
//wraps a default scrollable and style for the page
const PageWrapper = ({children, scrollable, ...props} : Props) => {

  if(scrollable) return(
    <View style={styles.main} >
			<StatusBar />
			<SafeAreaView  style={{flex:1}} ><ScrollView style={styles.scrollView} >
        {children}
      </ScrollView></SafeAreaView>
		</View>
  );

  return(
  <View style={styles.main} >
    <StatusBar />
    {children}
  </View>
  )
}

export default PageWrapper;