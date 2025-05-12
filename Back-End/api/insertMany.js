import { artistArray } from '../../Front-End/src/assets/database/artists.js'
import { songsArray } from '../../Front-End/src/assets/database/songs.js'
import { db } from './connect.js'

const newArtistArray = artistArray.map((currArtistObj) => {
    const newArtistObj = { ...currArtistObj }
    delete newArtistObj.id

    return newArtistObj
})

const newSongsArray = songsArray.map((currSongsObj) => {
    const newSongObj = { ...currSongsObj }
    delete newSongObj.id

    return newSongObj
})

const responseSongs = await db.collection('songs').insertMany(newSongsArray)
const responseArtist = await db.collection('artists').insertMany(newArtistArray)

console.log(responseSongs)
console.log(responseArtist)