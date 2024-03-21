import { SafeAreaView, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'

import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen'
import { CounterScreen } from './src/presentation/screens/CounterScreen'
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen'


export const App = () => {
  return (
    <PaperProvider settings={{
      icon: (props) => <IonIcon {...props}/>
    }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name='Roberto Figueroa'/> */}
        {/* <CounterScreen/> */}
        <CounterM3Screen/>
      </SafeAreaView>
    </PaperProvider>
  )
}
