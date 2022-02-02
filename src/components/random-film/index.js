import { Image, Text, View, StyleSheet, Modal, TouchableOpacity, ActivityIndicator } from 'react-native'

import { Button } from '../button'
import { useState } from 'react'

export const RandomFilm = ({ film, show, onHide, navigation }) => {
  const { posterUrlPreview, nameRu, nameEn, nameOriginal, ratingKinopoisk } = film

  const [ loading, setLoading ] = useState(true)

  const onMore = () => navigation.navigate('Film', {
    filmId: film.filmId
  })

  const loadEnd = () => setLoading(false)

  return (
    <Modal
      animationType="fade"
      transparent={ true }
      visible={ show }
    >
      <TouchableOpacity
        style={ styles.wrapper }
        activeOpacity={ 1 }
        onPress={ onHide }
      >
        <View style={ styles.content }>
          <Text style={ styles.title }>Фильм выбран 😊</Text>
          <Image
            style={ styles.poster }
            source={ { uri: posterUrlPreview } }
            onLoadEnd={ loadEnd }
          />
          { loading && (
            <ActivityIndicator color="#007CF9"/>
          ) }
          <Text style={ styles.name }>
            { nameRu || nameEn || nameOriginal }
          </Text>
          <Text>Рейтинг { ratingKinopoisk }/10</Text>
          <Button onPress={ onMore } title="Подробнее"/>
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  title: {
    fontWeight: '800',
    fontSize: 22
  },
  poster: {
    width: '80%',
    height: 350,
    resizeMode: 'contain'
  },
  name: {
    fontWeight: '700'
  }
})