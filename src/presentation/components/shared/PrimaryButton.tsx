import { StyleSheet, Text, Pressable, Platform } from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: PrimaryButtonProps) => {
  return (
    
    <Pressable 
      style={ ({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed
      ]}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}>
      <Text style={styles.text}>Increment</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  text: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB'
  },
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6': 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB': '#white',
  }
})