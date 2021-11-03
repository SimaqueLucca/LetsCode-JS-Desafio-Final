function CreateCard(
    {
        mediaAPI,
        addressAPI,
        nameAPI,
        areaAPI,
        roomsAPI,
        bathAPI,
        garageAPI
    }
) {
    const mainContainer = document.querySelector('.contents-right-container')

    const card = document.createElement('article')
    card.classList.add('card-grid-container')
    mainContainer.append(card)

    const carousel = document.createElement('div')
    carousel.classList.add('carousel')
    card.append(carousel)

    const carIMG = document.createElement('img')
    carIMG.classList.add('img')
    carIMG.src = mediaAPI
    carousel.append(carIMG)

    const description = document.createElement('div')
    description.classList.add('description')
    card.append(description)

    const addressContainer = document.createElement('div')
    addressContainer.classList.add('addressContainer')
    description.append(addressContainer)

    const address = document.createElement('span')
    address.classList.add('address')
    address.innerText = `${addressAPI}`
    addressContainer.append(address)

    const name = document.createElement('h2')
    name.classList.add('name')
    name.innerText = `${nameAPI}`
    addressContainer.append(name)

    const divDetails = document.createElement('div')

    const details = document.createElement('ul')
    details.classList.add('detailsUL')

    const area = document.createElement('li')
    area.classList.add('detailsLI')

    const rooms = document.createElement('li')
    rooms.classList.add('detailsLI')

    const bathrooms = document.createElement('li')
    bathrooms.classList.add('detailsLI')

    const garage = document.createElement('li')
    garage.classList.add('detailsLI')

    const areaSpan = document.createElement('span')
    areaSpan.classList.add('detailsSpan')
    areaSpan.innerText = `${areaAPI} m²`

    const roomsSpan = document.createElement('span')
    roomsSpan.classList.add('detailsSpan')
    roomsSpan.innerText = `${roomsAPI} Quartos`

    const bathroomsSpan = document.createElement('span')
    bathroomsSpan.classList.add('detailsSpan')
    bathroomsSpan.innerText = `${bathAPI} Banheiros`

    const garageSpan = document.createElement('span')
    garageSpan.classList.add('detailsSpan')
    garageSpan.innerText = `${garageAPI} Vagas`

    area.append(areaSpan)
    area.append(roomsSpan)
    area.append(bathroomsSpan)
    area.append(garageSpan)


    addressContainer.append(divDetails)
    divDetails.append(details)
    details.append(area)
    details.append(rooms)
    details.append(bathrooms)
    details.append(garage)



}

export default CreateCard