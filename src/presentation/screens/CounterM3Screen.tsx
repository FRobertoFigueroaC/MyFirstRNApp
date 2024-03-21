import { useState } from 'react';
import { Text, View } from 'react-native';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'

import { globalStyles } from '../theme/global.styles';

export const CounterM3Screen = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
   setCounter(counter + 1)
  }
  const reset = () => {
   setCounter(0)
  }



  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>
        {counter}
      </Text>

      <FAB icon='add-circle-outline'
            style={globalStyles.fab}
            onPress={increment}
            onLongPress={reset}/>

    </View>
  )
}
