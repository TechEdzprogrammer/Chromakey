import {Link} from 'react-router-dom';
import styles from '../stylesheets/landingPage.module.css';
import Footer from '../SubComponents/Footer';
import NavBar from '../SubComponents/NavBar';

function LandingPage(){
    return(
        <>
            <NavBar/>

            <section className={styles.container}>
                <div>
                    <img src="src\assets\ChromaKey landing page banner.svg" alt="banner of ChromaKey" className={styles.banner}/>
                </div>
                <div className={styles.btnContainer}>
                    <Link to="/products-page"><button className={`btn btn-dark ${styles.shopbtn}`}>Shop Now</button></Link>
                </div>
            </section>
            
            <Footer/>
        </>
    )
}

export default LandingPage;


//todos
//should include banner of the ecommerce app
//should include the top sales
//should include the new arivals
//footer