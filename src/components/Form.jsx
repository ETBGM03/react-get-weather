import { useState } from "react";
import { valdiateForm } from "../utils/ValidateForm";
const Form = () => {
  const [city, setCity] = useState({
    city: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    setError(valdiateForm({ city: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return setError({ city: "Nombre ciudad es requerido" });
    const API_KEY = import.meta.env.VITE_ACCESS_API_KEY;
    let url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
  };

  return (
    <div className="container__form">
      <form onSubmit={(e) => handleSubmit(e)}>
        {error.city ? <span style={{ color: "red" }}>{error.city}</span> : null}
        <input type="text" name="city" onChange={(e) => handleChange(e)} />
        <button>Buscar</button>
      </form>
    </div>
  );
};

export { Form };
