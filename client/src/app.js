import React from 'react'
import ReactDOM from 'react-dom'
import GameBoard from './containers/GameBoard'

window.onload = function(){
  ReactDOM.render(
    <GameBoard></GameBoard>,
    document.getElementById('app')
  );
}
