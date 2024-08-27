import "./styles.css";
import { useState } from "react";

/*
  INSTRUCTIONS:
  Create a "todo"(add cities) app with the following criteria.
    1. The user can add new cities
    2. The user can remove existing cities items
*/

export default function App() {
  const [city, setCity] = useState("");
  const [counter, setCounter] = useState(1);
  const [cities, setCities] = useState([]);
  const addCity = (e) => {
    setCity(e.target.value);
  };
  const addCities = () => {
    setCities([...cities, { id: counter, city: city }]);
    setCity("");
    setCounter(counter + 1);
  };

  const removeCities = (current) => {
    setCities(cities.filter((all) => all.id != current.id));
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={addCity}
        value={city}
        placeholder="Add City"
      />
      <button onClick={addCities}>Add</button>
      {cities.map((c) => {
        return (
          <ul>
            <p>{c.city}</p>
            <button onClick={() => removeCities(c)}>X</button>
          </ul>
        );
      })}
    </div>
  );
}
