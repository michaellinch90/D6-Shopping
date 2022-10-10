import { useState, useEffect } from 'react';
import * as itemsAPI from '../../utilities/items-api'

export default function NewOrderPage() {
  const [listItems, setListItems] = ([]);

  
  // useEffect(function() {
  //   console.log('useEffect runs only after first render');
  // }, [listItems]);

  useEffect(function(){
    async function getItems(){
      const items = await itemsAPI.getAll();
      setListItems(items)
    }
    getItems();
  }, [])

  return (
    <>
    <h1>New List Page</h1>
    <button onClick={() => setListItems(Date.now())}>Trigger re render</button>
    </>
    
  );
}


