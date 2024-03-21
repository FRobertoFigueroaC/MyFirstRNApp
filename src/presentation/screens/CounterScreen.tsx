import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { PrimaryButton } from '../components';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(0);

  const increment = () => {
   setCounter(counter + 1)
  }
  const reset = () => {
   setCounter(0)
  }



  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      {counter}
      </Text>
      <PrimaryButton label='Increment +1'
          onLongPress={reset}
          onPress={increment}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90E0EF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  }
})