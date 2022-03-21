import { View, StatusBar, ScrollView, ViewProps, SafeAreaView } from 'react-native';
import styles from './styles';

interface Props extends ViewProps{
  scrollable? : boolean
}

//wraps a default scrollable and style for the page
const PageWrapper = ({children, scrollable, ...props} : Props) => {

  if(scrollable) return(
    <SafeAreaView style={styles.main} >
		  <ScrollView style={styles.scrollView} keyboardDismissMode="on-drag" >
			  <StatusBar />
        {children}
      </ScrollView>
		</SafeAreaView>
  );

  return(
  <View style={styles.main} >
    <StatusBar />
    {children}
  </View>
  )
}

export default PageWrapper;