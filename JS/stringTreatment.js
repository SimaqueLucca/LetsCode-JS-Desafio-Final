import states from '../Data/states.js'
import cities from '../Data/cities.js'

function searchImprove(stringInput) {
    let newStr = stringInput.toUpperCase()
    newStr = newStr.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    newStr = newStr.replace(/\s/g, '')

    const state = matchState(newStr)

    let cityReturn = state !== undefined ? { 'UF': state.UF, 'city': state.city } : { 'UF': '', 'city': stringInput }
    return cityReturn
}

function matchState(inputString) {
    const newState = states.filter((x) => {
        if (x.UF == inputString || x.state == inputString) {
            return ({ 'UF': x.UF, 'city': x.state })
        }
    })

    if (newState == '') {
        const city = matchCity(inputString)
        if (city != '') {
            return { 'UF': city[0].UF, 'city': city[0].name }
        }
    }
    else {
        return { 'UF': newState[0].UF, 'city': newState[0].state }
    }
}

function matchCity(inputString) {

    const matchCityReturn = cities.filter((x) => {
        let cityName = x.name.toUpperCase()
        cityName = cityName.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        cityName = cityName.replace(/\s/g, '')

        if (cityName == inputString) {
            return { 'city': x.name, 'UF': x.UF }
        }
    })
    return matchCityReturn
}

export default searchImprove