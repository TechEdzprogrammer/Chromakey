import styles from '../stylesheets/Nav.module.css';
import {Link} from 'react-router-dom';
import img from '../img/shopping-cart_8249301.png';
import logo from '../img/ChromaKey .png';
function NavBar() {
  return (
   <>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link to="/"><img src={logo} alt="Logo" width="100" height="50" className="d-inline-block align-text-top"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className={`navbar-nav ${styles.navName}`}>
                    <Link to="/"><div><h4><strong>Home</strong></h4></div></Link>
                    <Link to="/products-page"><div><h4><strong>Products</strong></h4></div></Link>
                    <Link to="/cartPage"><img src={img} alt="cart logo" width={40} height={30} className={styles.cartLogo}/></Link>
                  </div>
                </div>
                <form className={`d-flex ${styles.searchBar}`} role="search">
                  <input className="form-control me-2" type="search" placeholder="search products" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="button">Search</button>
                </form>
            </div>
        </nav>
   </>
  )
}

export default NavBar;
