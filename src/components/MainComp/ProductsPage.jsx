import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import NavBar from "../SubComponents/NavBar";
import styles from "../stylesheets/productsPage.module.css";
import Footer from "../SubComponents/Footer";
import stylesFilter from '../stylesheets/filterProduct.module.css';
import TopPicks from "./TopPicks";


function ProductsPage(){
    const [keyboard, setkeyBoard] = useState([]);
    const [endpoint, setFilterEndpoint] = useState("keyboard");
    
    useEffect(() => {
        async function fetchKeyboard(){
            const keyboardData = await fetch(`http://mechanicalkeyboardapi.mooo.com/${endpoint}`);
            const keyboardResult = await keyboardData.json();
            setkeyBoard(keyboardResult);
        };  
        fetchKeyboard();
    },[endpoint]);


    function showAllKeyboard(){
        setFilterEndpoint("keyboard");
    }

    function show65percentLayout(){
        setFilterEndpoint("keyboard_details?layout=65%");
    }

    function show75percentLayout(){
        setFilterEndpoint("keyboard_details?layout=75%");
    }

    function show100percentLayout(){
        setFilterEndpoint("keyboard_details?layout=100%");
    }

    return(
        <>
            {keyboard ? (<NavBar/>):(<h1>...Loading</h1>
            )
            };
            
            <h2>Top Picks for this month</h2>
            <TopPicks/>

            <h1 className={styles.heading}><strong>Chromakey Products</strong></h1>
            <div className={stylesFilter.filterContainer}>
                <h3>Filter</h3>
                <button onClick={showAllKeyboard} className='btn btn-success'>All keyboards</button>
                <button onClick={show65percentLayout}  className='btn btn-warning'>65%  layout</button>
                <button onClick={show75percentLayout}  className='btn btn-primary'>75%  layout</button>
                <button onClick={show100percentLayout}  className='btn btn-secondary'>100% layout</button>
            </div>
            
            <section className={styles.products}>
                {keyboard.map((e,index)=>{
                    return(
                            <Link to={`/product-details/${e.id}`} key={index} style={{textDecoration:'none'}}>
                                <div  className={styles.productContainer}>
                                    <img src={e.keyboard_img_url} alt="keyboard image" width={400}/>
                                    <div className={styles.productDetails}>
                                        <h5>{e.keyboard_name}</h5>
                                        <p>₱{e.keyboard_price}</p>
                                        <p>{e.keyboard_rating}</p>
                                    </div>
                                </div>
                            </Link>
                    );
                })};
            </section>
            <Footer/>
        </>
    )
}

export default ProductsPage;