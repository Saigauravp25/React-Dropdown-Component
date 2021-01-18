import React, { useState } from 'react'
import './App.css'
import Dropdown from './Dropdown'
import { movies, songs, cities, colors, foods } from './TestData'

function App () {
  // state for each dropdown to keep track of its selected items
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedFoods, setSelectedFoods] = useState([])
  const [selectedMovies, setSelectedMovies] = useState([])
  const [selectedSongs, setSelectedSongs] = useState([])
  const [selectedCities, setSelectedCities] = useState([])

  // create 3 dropdowns using example data from TestData.js, specify props for each dropdown. header, multiselect, subject, showIcons props are optional
  // omitting header prop results in no label above dropdown
  // omitting multiselect prop results in default value of false
  // omitting subject prop results in default value of "item"
  // omitting showIcons prop results in default value of false
  return (
    <div className="app">
      <div id="demo-logo"></div>
      <div className="app-dropdowns">
        <Dropdown header="Favorite Color" multiselect={false} subject="color" showIcons={true} items={colors} selections={selectedColors} onChange={(ob) => setSelectedColors(ob)}/>
        <Dropdown header="Favorite Food" multiselect={false} subject="food" showIcons={false} items={foods} selections={selectedFoods} onChange={(ob) => setSelectedFoods(ob)}/>
      </div>
      <div className="app-dropdowns">
        <Dropdown header="Movie Collection" multiselect={true} subject="movie" showIcons={true} items={movies} selections={selectedMovies} onChange={(ob) => setSelectedMovies(ob)}/>
        <Dropdown header="Song Collection" multiselect={true} subject="song" showIcons={true} items={songs} selections={selectedSongs} onChange={(ob) => setSelectedSongs(ob)}/>
        <Dropdown header="Visited Cities" multiselect={true} subject="city" showIcons={false} items={cities} selections={selectedCities} onChange={(ob) => setSelectedCities(ob)}/>
      </div>

      {/* view console in Chrome to verify that indices of selected items are stored appropriately for access*/}
      {console.log("Selected IDs - Movies:", selectedMovies, "Songs:", selectedSongs, "Cities", selectedCities)}
      {console.log("Selected IDs - Colors:", selectedColors, "Foods:", selectedFoods)}

    </div>
  )
}

export default App