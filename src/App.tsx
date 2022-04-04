import React from "react";
import "./App.css";
import { Afspraken } from "./Components/Afspraken";
import MemoizedSubtitle from "./Components/Subtitle";
import MemoizedTitle from "./Components/Title";
import { TitleStyle, SubtitleStyle, AppStyle } from './styles';

function App() {
  return (
    <div className="App" style={AppStyle}>
      <MemoizedTitle title={"Afspraken"} style={TitleStyle}/>
      <MemoizedSubtitle
        subtitle={"Een planningsaplicatie waar je jouw afspraken tracken kan"}
      style={SubtitleStyle}/>
      <Afspraken />
    </div>
  );
}

export default App;
