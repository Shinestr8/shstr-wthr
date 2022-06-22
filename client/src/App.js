import { Weather } from "./Weather/WeatherAPI";
import './App.css'

function App() {
  return (
    <>
    <div className="weather-container">
      <Weather/>
    </div>
    
    <footer>Donnée fournie par <a href="https://openweathermap.org">OpenWeatherData</a></footer>
    </>
    
  );
}

export default App;
