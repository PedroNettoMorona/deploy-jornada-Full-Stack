import React from 'react'
import ItemList from './ItemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Main = ({ type }) => {
    return (
        <div className='main'>
            {/* Item List de artistas */}
            {type === "artist" || type === undefined ?
                <ItemList title="Artistas" items={10} itemsArray={artistArray} path='/artists' idPath='/artist' /> : <></>}
            {/* Item List de músicas */}
            {type === "songs" || type === undefined ?
                <ItemList title="Músicas" items={20} itemsArray={songsArray} path='/songs' idPath='/song' /> : <></>}
        </div>
    )
}

export default Main