import { Image, Text, View, StyleSheet } from 'react-native'
import { useEffect, useState } from 'react'
import { getResources } from '../../utils/network'
import { FILM_ID } from '../../constants/kinopoisk'

export const Film = ({ route }) => {
  const { filmId } = route.params

  const [ film, setFilm ] = useState(null)
  const [ videos, setVideos ] = useState(null)

  useEffect(() => {
    (async () => {
      const film = await getResources(`${ FILM_ID }${ filmId }`)
      const videos = await getResources(`${ FILM_ID }${ filmId }/videos`)

      setFilm(film)
      setVideos(videos.items)
    })()
  }, [ filmId ])

  return (
    <View>
      { film && (
        <>
          <View>
            <Image source={ { uri: film.posterUrl, loadingIndicatorSource: true } } style={ styles.poster }/>
          </View>
          <View>
            <Text>{ film.nameRu || film.nameEn || film.nameOriginal }</Text>
            <Text>{ film.description }</Text>
          </View>
          <View>
            {/*{videos && videos.map(video => (*/ }
            {/*  <WebView source={{*/ }
            {/*    html: <iframe width="100%" height="200" src={video.url}></iframe>*/ }
            {/*  }}/>*/ }
            {/*))}*/ }
          </View>
        </>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 250,
    resizeMode: 'cover'
  }
})