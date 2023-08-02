import { Route, Routes } from "react-router-dom"
import { NavBar } from "./componentes/NavBar"
import {WeatherApp} from "./Weather/WeatherApp"
import { Home } from "./Home"
import { TatetiApp } from "./Ta-Te-Ti/TatetiApp"


export const App = () => {
  return (
      <>
      <NavBar></NavBar>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/weather" element={<WeatherApp/>}></Route>
       <Route exact path="/tateti" element={<TatetiApp/>}></Route>
      </Routes>
      </>
    )
}
