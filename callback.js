const request = require('request')

const getData = () => {
  let obj = {}

  request.get({ url: 'http://swapi.co/api/people/', json: true }, (
    error,
    res,
    body
  ) => {
    if (error) {
      console.error(error)
    } else {
      obj.people = body

      request.get({ url: 'http://swapi.co/api/planets', json: true }, (
        error,
        res,
        body
      ) => {
        if (error) {
          console.error(error)
        } else {
          obj.planets = body
          console.log(obj)
        }
      })
    }
  })
}

getData()
