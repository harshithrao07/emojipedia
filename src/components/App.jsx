import React from "react";
import emojipedia from "../emojipedia";
import Cards from "./Cards";

function createCards(emojipedia){
  return(
      <Cards key={emojipedia.id} emoji={emojipedia.emoji} name={emojipedia.name} meaning={emojipedia.meaning} />
  )
}

function App() {
  return (
    <div>
       <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(createCards)}</dl>
    </div>
  );
}

export default App;
