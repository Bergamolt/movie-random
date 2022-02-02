import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ { ...styles.button, ...style } }
      activeOpacity={ 0.9 }
    >
      <Text style={ styles.title }>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    minWidth: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#007CF9',
    borderRadius: 4,
  },
  title: {
    color: '#ffffff',
    fontWeight: '700',
    textTransform: 'uppercase'
  }
})