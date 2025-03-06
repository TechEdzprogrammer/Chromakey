import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from "../stylesheets/topPicks.module.css";

function TopPicks() {

    const [topPicks, setTopPicks] = useState([]);
    
    useEffect(()=>{
        async function getTopPicks(){
            const topPicksKeyboard = await fetch("http://mechanicalkeyboardapi.mooo.com/keyboard_details?top_picks=4100");
            const topPicksData = await topPicksKeyboard.json();
            setTopPicks(topPicksData);
        }   
        getTopPicks();
    });
  
  
    return (
    <>
        <section className={styles.products}>
                {topPicks.map((e,index)=>{
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
    </>
  )
}

export default TopPicks;
