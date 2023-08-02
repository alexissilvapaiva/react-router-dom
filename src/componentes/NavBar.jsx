import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <> 
    <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">React + Vite</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
           <li className="nav-item">
          <NavLink to='/weather' className="nav-link" >Clima</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav">
           <li className="nav-item">
          <NavLink to='/tateti' className="nav-link" >Ta-Te-Ti</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}