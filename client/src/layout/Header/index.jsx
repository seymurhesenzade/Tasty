import "../Header/index.scss"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
<section id="header">
  <div className="container">
<header>
<button className="btn">Tasty</button>
<nav>
  <ul>
    <li><Link to="/" style={{color:"white"}}>Home</Link></li>
    <li><Link to="/details/:id" style={{color:"white"}}>Menu</Link></li>
    <li><Link to="/add" style={{color:"white"}}>Add</Link></li>
    <li><Link to="/details/:id" style={{color:"white"}}>Detail</Link></li>
    <li><Link to="/footer" style={{color:"white"}}>Contact</Link></li>
  </ul>
</nav>
</header>
<div className="banner">
  <h1>Tasty & Delicious Food</h1>
</div>
</div>
</section>








    </>
  )
}

export default Header