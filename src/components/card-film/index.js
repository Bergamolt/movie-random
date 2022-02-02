import { useMemo, useState } from 'react'
import { Image, StyleSheet, TouchableOpacity, useWindowDimensions, ActivityIndicator } from 'react-native'

export const CardFilm = ({ posterUrlPreview, onPress }) => {
  const [ loading, setLoading ] = useState(true)
  const { width } = useWindowDimensions()

  const style = useMemo(() => ({
    width: (width / 3) - 5,
  }), [ width ])

  const loadEnd = () => setLoading(false)

  return (
    <TouchableOpacity
      onPress={ onPress }
      style={ { ...styles.card, ...style } }
      activeOpacity={ 1 }
    >
      <Image
        style={ styles.poster }
        source={ { uri: posterUrlPreview } }
        onLoadEnd={ loadEnd }
      />
      { loading && (
        <ActivityIndicator color="007CF9"/>
      ) }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2.5,
  },
  poster: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})