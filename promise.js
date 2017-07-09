const axios = require('axios')

const getPeoples = () => axios.get('http://swapi.co/api/people/')
const getPlanets = () => axios.get('http://swapi.co/api/planets/')

const getData = () => {
  let obj = {}

  getPeoples()
    .then(res => {
      obj.peoples = res.data
      return getPlanets()
    })
    .then(res => {
      obj.planets = res.data
      console.log(obj)
    })
    .catch(error => {
      console.error(error)
    })
}

getData()
