import React from 'react'
import Tile from '../components/Tile'

class GameBoard extends React.Component {
  constructor(){
    super()
    let questions = [
      {text: "Do they have facial hair?", thisKey: "beard", valid: "yes"},
      {text: "Do they have a hat?", thisKey: "hat", valid: "yes"},
      {text: "Do they have red hair?", thisKey: "hair", valid: "red"}
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
      },
      {
        name: "Moana",
        hair: "blue",
        beard: "no",
        hat: "no"
      },
      {
        name: "Zedd",
        hair: "none",
        beard: "no",
        hat: "yes"
      }
    ]
    let randomy = Math.floor(Math.random() * characters.length);
    let chosen = characters[randomy]
    this.state = {
      chosen: chosen,
      characters: characters,
      questions: questions,
      eliminatedCharacters: []
    }
  }

  trueOfChosen(newCharacters, newExcludedCharacters, question){
    for (let i = newCharacters.length-1; i >= 0; i--){
      var character = newCharacters[i]
      if(character[question.thisKey] !== question.valid){
        newExcludedCharacters.push(newCharacters.splice(i, 1)[0])
      }
    }
    this.setState({characters: newCharacters, eliminatedCharacters: newExcludedCharacters})
  }

  falseOfChosen(newCharacters, newExcludedCharacters, question){
    for (let i = newCharacters.length-1; i >= 0; i--){
      var character = newCharacters[i]
      if(character[question.thisKey] === question.valid){
        newExcludedCharacters.push(newCharacters.splice(i, 1)[0])
      }
    }
    this.setState({characters: newCharacters, eliminatedCharacters: newExcludedCharacters})
  }

  eliminate(){
    let newCharacters = this.state.characters
    let newExcludedCharacters = []
    let question = this.state.questions[this.state.selectedQuestion]
    if(this.state.chosen[question.thisKey] === question.valid){
      this.trueOfChosen(newCharacters, newExcludedCharacters, question)
    }else{
      this.falseOfChosen(newCharacters, newExcludedCharacters, question)
    }
  }

  go(){
    this.eliminate()
  }

  componentDidUpdate(){
    if (this.state.characters.length === 1) {
      alert("You win!")
    }
  }

  handleQuestionSelect(event){
    this.setState({selectedQuestion: event.target.value})
  }

  render(){
    return (
      <div>
        <h2>Questions</h2>
        <select className="question-chooser" defaultValue="foobar" value={this.state.selectedQuestion} onChange={this.handleQuestionSelect.bind(this)}>
          {this.state.questions.map(function(question, pos){
            return <option value={pos} key={pos}>{question.text}</option>
          })}
        </select>
        <button className="go" onClick={this.go.bind(this)}>GO</button>
        <h2>Still in play</h2>
        {this.state.characters.map(function(character, pos){
          return <Tile key={pos} character={character}></Tile>
        })}
        <h2>Eliminated</h2>
        {this.state.eliminatedCharacters.map(function(character, pos){
          return <Tile key={pos} character={character}></Tile>
        })}
      </div>
    )
  }
}

export default GameBoard
