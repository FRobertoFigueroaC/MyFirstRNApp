import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

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
      <Pressable onPress={increment} onLongPress={reset}>
        <Text>Increment</Text>
      </Pressable>
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
  },
  btn: {

  }
})