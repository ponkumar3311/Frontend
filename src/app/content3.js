"use client";
import styles from "./page.module.css";

export default function Content3() {
  return (
      <div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around',marginTop:'20px'}}>
        <h1>FORTE</h1>
        <div>
          <input
            type="text"
            id="cussearch"
            style={{ height: '45px', marginTop: '25px', width: '300px', fontSize: 'larger' }}
          />
          <button style={{ height: '45px', width: '100px' }}>search</button>
        </div>
        <div>
          <button id="button" className={styles.fltr}style={{ height: '35px', width: '100px', backgroundColor:'white',color:'black'}}>Filter</button>
          <button id="button" className={styles.fltr}style={{ height: '35px', width: '150px',backgroundColor:'white',color:'black' }}>Clear Filter</button>
        </div>
        </div>
      

       <div className={styles.prodcoll}>
       <div className={styles.product} data-category="mobile" data-price="99999">
          <h4>Apple iPhone 15 Pro (1TB, Blue Titanium)</h4>
          <img src="\Apple iPhone 15 Pro (1TB, Blue Titanium).webp" width={400}></img>
          <p> Mobile</p>
          <p>₹99999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
          
       </div>
       <div className={styles.product}>
          <h4>realme GT 6 5G (8GB RAM, 256GB, Fluid Silver)</h4>
          <img src="\realme GT 6 5G (8GB RAM, 256GB, Fluid Silver) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹35999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>Redmi Note 14 Pro 5G (8GB RAM, 256GB, Ivy Green)</h4>
          <img src="\Redmi Note 14 Pro 5G (8GB RAM, 256GB, Ivy Green) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹19999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>OnePlus 13R 5G (12GB RAM, 256GB, Astral Trail)</h4>
          <img src="\OnePlus 13R 5G (12GB RAM, 256GB, Astral Trail) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹43999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>OnePlus Nord CE4 5G (8GB RAM, 256GB, Marble)</h4>
          <img src="\OnePlus Nord CE4 5G (8GB RAM, 256GB, Marble) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹24999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>OnePlus Nord CE3 5G (12GB RAM, 256GB, Gray Shimmer)</h4>
          <img src="\OnePlus Nord CE3 5G (12GB RAM, 256GB, Gray Shimmer) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹27000</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>SAMSUNG Galaxy M20 (4GB RAM, 64GB, Ocean Blue)</h4>
          <img src="\SAMSUNG Galaxy M20 (4GB RAM, 64GB, Ocean Blue) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹19999</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       <div className={styles.product}>
          <h4>realme 12 Pro 5G (8GB RAM, 256GB, Submarine Blue)</h4>
          <img src="\realme 12 Pro 5G (8GB RAM, 256GB, Submarine Blue) - Copy.webp" width={400}></img>
          <p> Mobile</p>
          <p>₹30000</p>
          <div>
         <button className={styles.buynowbtn}>Buy Now</button>
         </div>
         <div>
            <button className={styles.atcbtn}>Add to Cart</button>
         </div>
       </div>
       
    
    </div>
    </div>
    

   
  );
}