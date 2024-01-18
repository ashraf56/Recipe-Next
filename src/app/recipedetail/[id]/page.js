'use client'
import React, { useEffect, useState } from 'react';

const Details = ({params}) => {
    let {name}=params
    console.log(name);
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
      // Retrieve data from localStorage
      const storedData = localStorage.getItem('recipe');
  
      if (storedData) {
        // Parse JSON data
        const parsedData = JSON.parse(storedData);
  
        // Find the item with the specified name
        const selectedItem = parsedData.find(item => item.name === name);
  
        if (selectedItem) {
          setItemData(selectedItem);
        }
      }
    }, [name]);
    return (
        <div>
            {itemData !== null ? (
        <div>
          <p>Name: {itemData.name}</p>
          <p>Instruction: {itemData.instruction}</p>
          {/* Add more properties as needed */}
        </div>
      ) : (
        <p>No data found for the item with name {name}.</p>
      )}
        </div>
    );
};

export default Details;