import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import new_collection from "../assets/new_collections"
import { Item } from '../Item/Item'

export const NewCollections = () => {

  const [new_collection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("https://e-commerce-backend-p53b.onrender.com/newcollection")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setNewCollection(data))
      .catch((error) => console.error('Error fetching new collection:', error));
  }, []);
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i) => {
                return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>

            })}
        </div>
    </div>
  )
}
