import React from 'react'

const Tile = (props) => {
  return (
    <div className="tile">
      <h1>{props.character.name}</h1>
      <ul>
        <li>Hair: {props.character.hair}</li>
        <li>Beard: {props.character.beard}</li>
        <li>Hat: {props.character.hat}</li>
      </ul>


      </div>
  )
}

export default Tile
