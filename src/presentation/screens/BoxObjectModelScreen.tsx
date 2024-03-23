
import { StyleSheet, Text, View } from 'react-native';


export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola Mundo</Text>
      </View>
      <View style={styles.purpleBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 40,
    flex: 1
  },
  title: {
    fontSize:30,
    borderWidth: 10,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: 30,
    // margin: 20
    marginHorizontal: 20,
    marginVertical: 50,
    padding: 5
  }
})