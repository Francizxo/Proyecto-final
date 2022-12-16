import { Carousel } from 'react-bootstrap';


import { useState,useEffect } from 'react'
import axios from 'axios';

function Carrusel() {
  const [articulos,setArticulos]= useState();
  const[option,setOpcion]=useState('articulos');

  useEffect(() => {
    getData();
  },[option] );

  async function getData() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=66cc2401f8b54cdb92e90030a001350e');
      console.log(response)
      setArticulos(response.data.articles)
    } catch (error) {
      console.error(error);
    }
  }  


    return (




<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img1.jpg"
      alt={articulos}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img3.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}


export default Carrusel;