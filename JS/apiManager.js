import CreateCard from './cardFactory.js'

async function getAPIData(inputText) {
    if (inputText.UF) {
        const UF = inputText.UF.toLowerCase()
        let CITY = inputText.city.toLowerCase()
        CITY = CITY.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        CITY = CITY.replace(/\s/g, '-')

        const response = await fetch(`https://private-9e061d-piweb.apiary-mock.com/venda?state=${UF}&city=${CITY}`)

        getItemData(await response.json(), UF)
    }
    else {
        console.log('cidade no exist');
    }
}

async function getItemData(promise, UF) {
    let itemData = await promise
    itemData = itemData.search.result.listings
    itemData.map((x) => {
        console.log(x);

        const image = x.medias[0].url
        const address = `${x.link.data.street}, ${x.link.data.streetNumber} - ${x.link.data.neighborhood}, ${x.link.data.city} - ${UF.toUpperCase()}`
        const name = `${x.link.name}`

        const area = `${x.listing.usableAreas}`
        const rooms = `${x.listing.bedrooms}`
        const bathrooms = `${x.listing.bathrooms}`
        const garage = `${x.listing.parkingSpaces}`

        console.log(area);
        CreateCard(
            {
                mediaAPI: image,
                addressAPI: address,
                nameAPI: name,
                areaAPI: area,
                roomsAPI: rooms,
                bathroomsAPI: bathrooms,
                garageAPI: garage
            })
    })
    return (itemData);
}

export default getAPIData