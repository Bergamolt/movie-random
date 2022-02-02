import { FILM_ID } from '../constants/kinopoisk'

export const getResources = async (url) => {
  try {
    const result = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': '25d807ef-e57f-499e-8921-d157bb7e56b0',
        'Content-Type': 'application/json',
      },
    })

    if (!result.ok) {
      return false
    }

    return await result.json()
  } catch (error) {
    console.log(error)
  }
}

export const getRandomFilm = () => {
  let data

  const timeE = setInterval(async () => {
    const random = Math.floor(Math.random() * 7000 + 1)

    if (!data) {
      data = await getResources(FILM_ID + random)
    } else {
      setRandomFilm(data)
      clearInterval(timeE)
    }
  }, 0)
}