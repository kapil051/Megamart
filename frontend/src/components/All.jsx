
import React, { useEffect, useState } from "react";
import axios from "axios";

export function All() {

        const [data, setData] = useState([]);


        useEffect(() => {

                async function fetch_data() {
                        
                        const res = await axios.get("http://localhost:3000/products");
                        console.log(res.data);
                        setData(res.data);

                }

                fetch_data();

        },[])


        return (

                <div>
                      {data.map((product)=>(
                           <div key={product.id}>
                               <div>{product.name}</div>
                               <div>{product.price}</div>
                               <div>{product.description}</div>
                               <div>{product.imageURL}</div>
                               <img src={product.imageURL} alt={product.name} />
                           </div> 
                      ))}
                </div>

        )

}