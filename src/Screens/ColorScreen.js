import React, {useReducer} from 'react';
import ColorCounter from '../Components/ColorCounter';
import ShapeView from '../Components/ShapeView';

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 225 || state.red + action.amount < 0
        ? state
        : {...state, red: state.red + action.amount};
    case 'green':
      return state.green + action.amount > 225 ||
        state.green + action.amount < 0
        ? state
        : {...state, green: state.green + action.amount};
    case 'blue':
      return state.blue + action.amount > 225 || state.blue + action.amount < 0
        ? state
        : {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};
const isi = 15;

const ColorScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <>
      <ColorCounter
        color="red"
        increment={() => dispatch({colorToChange: 'red', amount: isi})}
        deincrement={() => dispatch({colorToChange: 'red', amount: -1 * isi})}
      />
      <ColorCounter
        color="green"
        increment={() => dispatch({colorToChange: 'green', amount: isi})}
        deincrement={() => dispatch({colorToChange: 'green', amount: -1 * isi})}
      />
      <ColorCounter
        color="blue"
        increment={() => dispatch({colorToChange: 'blue', amount: isi})}
        deincrement={() => dispatch({colorToChange: 'blue', amount: -1 * isi})}
      />
      <ShapeView
        title="Hasil Kombinasi Warna: "
        red={red}
        green={green}
        blue={blue}
      />
    </>
  );
};

export default ColorScreen;
