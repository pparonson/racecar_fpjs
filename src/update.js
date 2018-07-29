const MSGS = {
  START_GAME: "START_GAME"
  , UPDATE_SPEED: "UPDATE_SPEED"
}

export function updateSpeedMsg(_speed) {
  return {
    type: MSGS.UPDATE_SPEED
    , speed: _speed
  }
}

export function startGameMsg(_gamePlay) {
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
