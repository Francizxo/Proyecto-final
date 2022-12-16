import { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import {Button,Row,Col, Container,Card,Navbar,Nav} from 'react-bootstrap';

function Index() {
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

  return(
    <>
   <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#index">index</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Futball" onClick={()=>setOpcion('futball')}>Futball</Nav.Link>
            <Nav.Link href="#bitcoin" onClick={()=>setOpcion('bitcoin')}>bitcoin</Nav.Link>
            <Nav.Link href="#Politica" onClick={()=>setOpcion('Politica')}>Politica</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <Container fluid>
        <Row>
          {articulos &&  articulos.map((articulo)=>(
            <Col >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={articulo.urlToImage} />
                  <Card.Body>
                    <Card.Title>{articulo.title}</Card.Title>
                      <Card.Text>
                        {articulo.description}
                      </Card.Text>
                      <Button onClick={() => window.location.assign(articulo.url)}>
                        Ver Noticia
                      </Button>
                    </Card.Body>
              </Card> 
            </Col>
        ))}    
        </Row>
<Button variant="primary">Primary</Button>
</Container> 
</>
  )
}
export default Index;