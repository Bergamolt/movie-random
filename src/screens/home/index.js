import { FilmList } from '../../components/film-list'
import { Button } from '../../components/button'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { getResources } from '../../utils/network'
import { TOP_FILMS, FILM_ID, TOP_100_POPULAR_FILMS } from '../../constants/kinopoisk'
import { useEffect, useState } from 'react'
import { RandomFilm } from '../../components/random-film'
import { useShowModal } from '../../hooks/use-show-modal'
import { randomNumber } from '../../utils/math'

export const Home = ({ navigation }) => {
  const [ films, setFilms ] = useState(null)
  const { show, onShow, onHide } = useShowModal()
  const [ randomFilm, setRandomFilm ] = useState(null)
  const [ page, setPage ] = useState(1)

  const getRandomFilm = () => {
    let data

    const timeE = setInterval(async () => {
      const random = randomNumber(7000)

      if (!data) {
        data = await getResources(FILM_ID + random)
      } else {
        setRandomFilm(data)
        clearInterval(timeE)
      }
    }, 0)
  }

  const loadFilms = async () => {
    const data = await getResources(TOP_100_POPULAR_FILMS + page)

    if (films) {
      setFilms([ ...films, ...data.films ])
      setPage(page + 1)

      return
    }

    setFilms(data.films)
    setPage(page + 1)
  }

  useEffect(() => {
    loadFilms()
  }, [])

  const onRandom = () => {
    getRandomFilm()
    onShow()
  }

  return (
    <View style={ styles.container }>
      <FilmList
        navigation={ navigation }
        films={ films }
        loadFilms={ loadFilms }
      />
      <Button
        onPress={ onRandom }
        title="Подобрать фильм 🎲"
        style={ styles.button }
      />
      { randomFilm && (
        <RandomFilm
          film={ randomFilm }
          show={ show }
          navigation={ navigation }
          onHide={ onHide }
        />
      ) }
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    paddingVertical: 15,
  }
})
