import { useState, useEffect } from 'react';
import axios from 'axios';

const useTopnew = () => {
    const [articulos,setArticulos]= useState();
    const[option,setOpcion]=useState('articulos');
 

  useEffect(() => {
    getData();
  },[option] );

  async function getData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=08aa99e674574c1badc83e209d9eb4ea');
      console.log(response)
      setArticulos(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }  
};
export default useTopnew;