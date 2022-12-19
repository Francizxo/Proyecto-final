import { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchResults from '../components/Search';
import {Button,Row,Col, Container,Card,Navbar,Nav,Carousel} from 'react-bootstrap';

function Index() {
  const [articulos,setArticulos]= useState();
  const[option,setOpcion]=useState('articulos');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  
  const searchArticles = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=08aa99e674574c1badc83e209d9eb4ea`);
    setResults(res.data.articles);
  }
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

  return(
    <>
  <Navbar bg="primary" variant="dark">
  <Container>
    <Navbar.Brand href="#index">index</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#Futball" onClick={() => setOpcion('Futball')}>Futball</Nav.Link>
      <Nav.Link href="#bitcoin" onClick={() => setOpcion('bitcoin')}>bitcoin</Nav.Link>
      <Nav.Link href="#Politica" onClick={() => setOpcion('Politica')}>Politica</Nav.Link>
    </Nav>
    <Nav>
      <SearchResults/>
    </Nav>
  </Container>
</Navbar>

<Container fluid="sm">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {articulos &&  articulos.map((articulo)=>(
        <Carousel.Item key={articulo.title}>
          <img
            className="d-block w-100"
            src={articulo.urlToImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{articulo.title}</h3>
            <p>{articulo.description}</p>
          </Carousel.Caption>
            </Carousel.Item>
            ))}             
          </Carousel>
      </Container>
    <Container fluid>
        <Row>
          {articulos &&  articulos.map((articulo)=>(
            <Col key={articulo.title}>
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