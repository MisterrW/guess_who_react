import React from 'react'
import Tile from '../components/Tile'

class GameBoard extends React.Component {
  constructor(){
    super()
    let lol = "thing"
    let questions = [
      "Do they have facial hair?",
      "Do they have a hat?",
      "Do they have red hair?",
    ]
    let characters = [
      {
        name: "Jeff",
        hair: "brown",
        beard: "yes",
        hat: "no"
      },
      {
        name: "Lisa",
        hair: "red",
        beard: "no",
        hat: "yes"
      }
    ]
    this.state = {
      lol: lol,
      characters: characters,
      questions: questions
    }
  }

  render(){
    return (
      <div>
      <Tile character={this.state.characters[0]}></Tile>
      <Tile character={this.state.characters[1]}></Tile>
      </div>
    )
  }

}

export default GameBoard
