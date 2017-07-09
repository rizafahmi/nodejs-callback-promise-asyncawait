const axios = require('axios')

const getPeoples = () => axios.get('http://swapi.co/api/people/')
const getPlanets = () => axios.get('http://swapi.co/api/planets/')

const getData = async () => {
  try {
    const peoples = await getPeoples()
    const planets = await getPlanets()

    console.log({
      peoples: peoples.data,
      planets: planets.data
    })
  } catch (err) {
    console.error(err)
  }
}

getData()
