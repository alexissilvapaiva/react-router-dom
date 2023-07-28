import { useState } from "react"
import "./weatherStyles.css"


export const WeatherApp = () => {

  const urlBase = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '51b645ec6781e48aceb2cefcc9733f2a'
  const difKelvin = 273.15
  const [ciudad, setCiudad] = useState('');
  const [dataClima, setDataClima] = useState(null);


  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
      const data = await response.json();
      setDataClima(data);
    }catch (error){
      console.error('Ocurrio el siguiente problema : ', error)
      window.location.reload()
    }
  }

  
  const handleCambioCiudad = (event) => {
    setCiudad(event.target.value)
  }
  const handleSubmit = (event) => {
      event.preventDefault();
       if (ciudad.length > 0) fetchClima();
  }

  return (
   <>
   <h1>Consulta el Clima</h1>
   <form onSubmit={handleSubmit}>
      <input type="text" value={ciudad} onChange={handleCambioCiudad} placeholder="Ingresa Ciudad"/>
      <button type="submit">Buscar</button>
   </form>
   {
    dataClima && (
     <div>
      <h2>{dataClima.name}</h2>
                    <p>Pais: {dataClima.sys?.country}</p>
                    <p>Temperatura: {parseInt(dataClima.main?.temp - difKelvin)}°C</p>
                    <p>Condición: {dataClima.weather[0]?.description}</p>
                    <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="Weather Icon" />
     </div>
    )
   }
      </>
  )
}
