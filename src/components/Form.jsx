import {useState, useEffect} from "react"

const Form = () => {
  const [city, setCity] = useState("")

  useEffect(async () => {
    const API_KEY = import.meta.env.VITE_ACCESS_API_KEY
    let url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=new york`
    const result = await fetch(url)
    const data = await result.json()
    console.log(data)
  }, [city])

  return (
    <div className="container__form">
      <form>
        <select name="" id="">
          <option value="" id="0">Seleccione la ciudad</option>
        </select>

        {/* <button >Get Weather</button> */}
        
      </form>
    </div>
  )
}

export default Form