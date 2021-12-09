import React from 'react'
import HomeScreen from './App/Screen/HomeScreen'
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StatusBar } from 'react-native';


const reducer = (state = { menu: "close" }, action) => {

  switch (action.type) {
    case "OPENMENU":
      return { menu: "open" };
    case "CLOSEMENU":
      return { menu: "close" };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>

      <HomeScreen />
    </Provider>
  )
}

export default App
