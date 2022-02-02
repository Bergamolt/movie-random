import { FlatList, StyleSheet } from 'react-native'
import { CardFilm } from '../card-film'

export const FilmList = ({ films, navigation, loadFilms }) => {
  const renderItem = ({ item }) => {
    const { posterUrlPreview, nameRu, nameEn, nameOriginal, filmId } = item

    return (
      <CardFilm
        onPress={ () => navigation.navigate('Film', { filmId }) }
        nameEn={ nameEn }
        nameRu={ nameRu }
        nameOriginal={ nameOriginal }
        posterUrlPreview={ posterUrlPreview }
      />
    )
  }

  return (
    <FlatList
      data={ films }
      renderItem={ renderItem }
      keyExtractor={ item => item.filmId }
      numColumns={3}
      style={ styles.filmList }
      onEndReachedThreshold={0.4}
      onEndReached={() => loadFilms()}
    />
  )
}

const styles = StyleSheet.create({
  filmList: {
    flex: 1,
    width: '100%',
  },
})