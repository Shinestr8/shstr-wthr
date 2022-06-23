import { Weather } from "./Weather/WeatherAPI";
import './App.css'
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState("light");

  function themeSwitch(){
    if(theme === "light"){
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div id="theme-provider" className={theme}>
      <div className="weather-container">
        <Weather/>
      </div>
      
      <footer>Donnée fournie par <a href="https://openweathermap.org">OpenWeatherData</a></footer>
      <button onClick={themeSwitch}>Switch theme ?</button>
    </div>
    
  );
}

export default App;
