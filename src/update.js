const MSGS = {
  START_GAME: "START_GAME"
}

export function startGame(_gamePlay) {
  return {
    type: MSGS.START_GAME
    , gamePlay: _gamePlay
  }
}

function update(_msg, _model) {
  if (_msg.type === "START_GAME") {
    const {gamePlay} = _msg
    // return the model with new property values
    return {..._model, gamePlay};
  }
}

export default update
