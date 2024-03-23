import { SafeAreaView, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'

import { 
  HelloWorldScreen,
  CounterScreen,
  CounterM3Screen,
  BoxObjectModelScreen,
  DimensionScreen
} from './src/presentation/screens';


export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon {...props}/>
    }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Roberto Figueroa'/> */}
        {/* <CounterScreen/> */}
        {/* <CounterM3Screen/> */}
        {/* <BoxObjectModelScreen/> */}
        <DimensionScreen/>
      </SafeAreaView>
    </PaperProvider>
  )
}
