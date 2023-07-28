import { Route, Routes } from "react-router-dom"
import { NavBar } from "./componentes/NavBar"
import {WeatherApp} from "./Weather/WeatherApp"
import { Home } from "./Home"


export const App = () => {
  return (
      <>
      <NavBar></NavBar>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/weather" element={<WeatherApp/>}></Route>
      </Routes>
      </>
    )
}
